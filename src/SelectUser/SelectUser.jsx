import { useContext } from 'react'
import { UserContext } from '../context/user.context'
import styles from './SelectUser.module.css'

function SelectUser() {
  const { userId, setUserId } = useContext(UserContext)

  const changeUser = (e) => {
    setUserId(Number(e.target.value))
  }

  return (
    <select
      name="user"
      id="user"
      value={userId}
      onChange={changeUser}
      className={styles.user}
    >
      <option value="1">Anton</option>
      <option value="2">Polina</option>
    </select>
  )
}

export default SelectUser

// Нихуя себе, работает
