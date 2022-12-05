import React, { useContext, useState } from 'react'
import Logo from '../Logo/Logo'
import "./header.scss"
import ProfileButton from '../ProfileButton/ProfileButton';
import { Context } from '../../pages/MainPage/MainPage';
import Burger from '../BurgerIcon/Burger';
import BurgerNave from '../BurgerMenuNav/BurgerNave';

const Header = ({ name = "Alexs" }) => {

  const value = useContext(Context)
  const [active, setActive] = useState(false)

  return (
    <>
      <header className='header'>
        <div className='header_conteiner'>
          <Logo />
          {value['windowSize'] > 768 ?
            < ProfileButton /> :
            <Burger active={active} setActive={() => {
              setActive(!active)
            }} />
          }
        </div>
      </header>
      <BurgerNave active={active} setActive={setActive} />
    </>

  )
}

export default Header;