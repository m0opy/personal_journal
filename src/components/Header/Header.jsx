import styles from './Header.module.css'

function Header() {
  return (
    <a href="#">
      <img className={styles.logo} src="/logo.svg" alt="Логотип журнала" />
    </a>
  )
}

export default Header
