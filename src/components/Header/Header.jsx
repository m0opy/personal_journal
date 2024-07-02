import SelectUser from '../../SelectUser/SelectUser'
import styles from './Header.module.css'

function Header() {
  return (
    <>
      <a href="#" className={styles.logo}>
        <img
          className={styles['logo-img']}
          src="/logo.svg"
          alt="Логотип журнала"
        />
      </a>
      <SelectUser />
    </>
  )
}

export default Header
