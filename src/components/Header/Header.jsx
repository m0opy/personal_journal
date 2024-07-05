import SelectUser from '../../SelectUser/SelectUser'
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
      <Logo image={logos[0]} />
      <SelectUser />
      {/* <Button onClick={toggleLogo}>Сменить логотип</Button> */}
    </>
  )
}

export default Header
