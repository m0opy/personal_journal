import styles from './Logo.module.css'

export function Logo({ image }) {
  console.log('Logo')
  return (
    <a href="#" className={styles.logo}>
      <img className={styles['logo-img']} src={image} alt="Логотип журнала" />
    </a>
  )
}

export default Logo
