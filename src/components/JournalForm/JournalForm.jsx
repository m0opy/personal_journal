import styles from './JournalForm.module.css'
import Button from '../Button/Button'
import { useState } from 'react'
import classNames from 'classnames'

function JournalForm({ onSubmit }) {
  const [formValidState, setFormValidState] = useState({
    title: true,
    post: true,
    date: true,
  })

  const addJornalItem = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const fromProps = Object.fromEntries(formData)
    let isFormValid = true
    if (!fromProps.title?.trim().length) {
      setFormValidState((state) => ({ ...state, title: false }))
      isFormValid = false
    } else {
      setFormValidState((state) => ({ ...state, title: true }))
    }
    if (!fromProps.post?.trim().length) {
      setFormValidState((state) => ({ ...state, post: false }))
      isFormValid = false
    } else {
      setFormValidState((state) => ({ ...state, post: true }))
    }
    if (!fromProps.date) {
      setFormValidState((state) => ({ ...state, date: false }))
      isFormValid = false
    } else {
      setFormValidState((state) => ({ ...state, date: true }))
    }
    if (!isFormValid) {
      return
    }
    onSubmit(fromProps)
  }

  return (
    <form className={styles['journal-form']} onSubmit={addJornalItem}>
      <div>
        <input
          type="text"
          name="title"
          className={classNames(
            styles['input'],
            styles['journal-form__title'],
            {
              [styles['invalid']]: !formValidState.title,
            }
          )}
        />
      </div>
      <div className={styles['form-row']}>
        <label htmlFor="date" className={styles['form-label']}>
          <img src="/date.svg" alt="Calendar" />
          <span>Дата</span>
        </label>
        <input
          type="date"
          name="date"
          id="date"
          className={classNames(styles['input'], styles['journal-form__date'], {
            [styles['invalid']]: !formValidState.date,
          })}
        />
      </div>

      <div className={styles['form-row']}>
        <label htmlFor="tag" className={styles['form-label']}>
          <img src="/tag.svg" alt="Folder" />
          <span>Метки</span>
        </label>
        <input
          type="text"
          name="tag"
          id="tag"
          className={classNames(styles['input'], styles['journal-form__tag'])}
        />
      </div>

      <textarea
        name="post"
        id=""
        cols="30"
        rows="10"
        className={classNames(styles['input'], styles['journal-form__post'], {
          [styles['invalid']]: !formValidState.post,
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
