import { forwardRef } from 'react'
import styles from './Input.module.css'
import classNames from 'classnames'

const Input = forwardRef(function Input(
  { className, isValid = true, appearence, ...props },
  ref
) {
  return (
    <input
      {...props}
      ref={ref}
      className={classNames(styles['input'], className, {
        [styles['invalid']]: !isValid,
        [styles['input-title']]: appearence === 'title',
      })}
    />
  )
})

export default Input
