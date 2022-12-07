import React, { useContext, useState } from 'react'
import Logo from '../Logo/Logo'
import "./header.scss"
import ProfileButton from '../ProfileButton/ProfileButton';
import { Context } from '../../pages/MainPage/MainPage';
import Burger from '../BurgerIcon/Burger';
import BurgerNave from '../BurgerMenuNav/BurgerNave';
import { useEffect } from 'react';
import { useScrollLock } from '../../hooks/useScrollLock';

const Header = ({ name = "Alexs" }) => {

  const value = useContext(Context)
  const [active, setActive] = useState(false)

  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (value['hidd']) {
      setActive(false)
      value['setHidd'](false)
    }

  }, [value['hidd']])

  useEffect(() => {
    if (active) {
      lockScroll()
    } else {
      unlockScroll()
    }
  }, [active])


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