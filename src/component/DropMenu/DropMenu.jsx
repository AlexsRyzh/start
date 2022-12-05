import React from 'react'
import styles from './drop_menu.module.scss'
import { DropMenuContainer } from './DropMenuContainer.styled'
import ProfileMenuItem from '../ProfileMenuItem/ProfileMenuItem'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const DropMenu = ({ children, show, background = "#fff", setShow }) => {
    const [profil, setProfile] = useState(false)
    const [exit, setExit] = useState(false)

    return (
        <div className={styles.container}>
            {children}
            {show &&
                <DropMenuContainer background={background} show={show}>
                    <Link to='/my-profile'>
                        <ProfileMenuItem onClick={() => {
                            setProfile(!profil)
                            setShow(!show)
                        }}>
                            <span className="material-symbols-rounded">
                                account_circle
                            </span>
                            <p>Профиль</p>
                        </ProfileMenuItem>
                    </Link>
                    <div style={{
                        width: "100%",
                        height: '1px',
                        background: '#272848',
                        opacity: '0.2'
                    }} />
                    <ProfileMenuItem onClick={() => {
                        setExit(!exit)
                        setShow(!show)
                    }}>
                        <span className="material-symbols-rounded">
                            logout
                        </span>
                        <p>Выйти</p>
                    </ProfileMenuItem>
                </DropMenuContainer>
            }
        </div>
    )
}

export default DropMenu