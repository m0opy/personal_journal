import SelectUser from '../../SelectUser/SelectUser'
import styles from './Header.module.css'
import Button from '../Button/Button'
import { useState } from 'react'
import Logo from '../Logo/Logo'

const logos = ['/logo.svg', '/vite.svg']

function Header() {
  const [logoIndex, setLogoIndex] = useState(0)
  console.log('Header')

  const toggleLogo = () => {
    setLogoIndex((state) => Number(!state))
  }

  return (
    <>
      <Logo image={logos[logoIndex]} />
      <SelectUser />
      <Button onClick={toggleLogo}>Сменить логотип</Button>
    </>
  )
}

export default Header
