import styles from './JournalForm.module.css'
import Button from '../Button/Button'
import { useEffect, useReducer, useRef } from 'react'
import classNames from 'classnames'
import { INITIAL_STATE, formReducer } from './JournalForm.state'
import Input from '../Input/Input'

function JournalForm({ onSubmit }) {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE)
  // Диструктурируем State на маленькие компоненты
  const { isValid, isFormReadyToSubmit, values } = formState
  const titleRef = useRef()
  const dateRef = useRef()
  const postRef = useRef()

  const focusError = (isValid) => {
    switch (true) {
      case !isValid.title:
        titleRef.current.focus()
        break
      case !isValid.date:
        dateRef.current.focus()
        break
      case !isValid.post:
        postRef.current.focus()
        break
    }
  }

  useEffect(() => {
    let timerId
    if (!isValid.date || !isValid.post || !isValid.title) {
      focusError(isValid)
      timerId = setTimeout(() => {
        dispatchForm({ type: 'RESET_VALIDITY' })
      }, 2000)
    }
    return () => {
      clearTimeout(timerId) // Функция будет вызываться, когда наш компонент исчезает из рендера
      // (т.е. если мы вызовем эффект, когда предыдущий еще будет работать, вызывется clearTimeout и эффекты не будут совместно работать)
    }
  }, [isValid])

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values)
      dispatchForm({ type: 'CLEAR' })
    }
  }, [isFormReadyToSubmit, values, onSubmit])

  const onChange = (e) => {
    dispatchForm({
      type: 'SET_VALUE',
      payload: { [e.target.name]: e.target.value },
    })
  }

  const addJournalItem = (e) => {
    e.preventDefault()
    dispatchForm({ type: 'SUBMIT' })
  }

  return (
    <form className={styles['journal-form']} onSubmit={addJournalItem}>
      <div>
        <Input
          type="text"
          name="title"
          onChange={onChange}
          value={values.title}
          ref={titleRef}
          appearence="title"
          isValid={isValid.title}
        />
      </div>
      <div className={styles['form-row']}>
        <label htmlFor="date" className={styles['form-label']}>
          <img src="/date.svg" alt="Calendar" />
          <span>Дата</span>
        </label>
        <Input
          type="date"
          name="date"
          id="date"
          ref={dateRef}
          onChange={onChange}
          value={values.date}
          isValid={isValid.date}
        />
      </div>

      <div className={styles['form-row']}>
        <label htmlFor="tag" className={styles['form-label']}>
          <img src="/tag.svg" alt="Folder" />
          <span>Метки</span>
        </label>
        <Input
          type="text"
          name="tag"
          id="tag"
          onChange={onChange}
          value={values.tag}
          isValid={isValid.tag}
        />
      </div>

      <textarea
        name="post"
        cols="30"
        rows="10"
        onChange={onChange}
        value={values.post}
        ref={postRef}
        className={classNames(styles['input'], styles['journal-form__post'], {
          [styles['invalid']]: !isValid.post,
        })}
      ></textarea>
      <Button
        text="Сохранить"
        onClick={() => {
          console.log('Нажали')
        }}
      />
    </form>
  )
}

export default JournalForm
