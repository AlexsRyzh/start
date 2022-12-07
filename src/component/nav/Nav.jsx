import React from 'react'
import styles from './nav.module.scss'
import RippleButton from '../RippleButton/RippleButton'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../pages/MainPage/MainPage'

const Nav = ({ SetClick = (elem) => { return; } }) => {
    const value = useContext(Context)
    return (
        <div className={styles['nav_container']}>
            <div className={styles['mini_container']} onClick={() => SetClick(false)}>
                <Link to='/'>
                    <RippleButton className={styles.button} opacity={0.2}>
                        <span className={"material-symbols-rounded " + styles.icon}>
                            tag
                        </span>
                        <p className={styles.text}>Обзор идей</p>
                    </RippleButton>
                </Link>
                <Link to='/profiles'>
                    <RippleButton className={styles.button} opacity={0.2}>
                        <span className={"material-symbols-rounded " + styles.icon}>
                            tag
                        </span>
                        <p className={styles.text}>Резюме</p>
                    </RippleButton>
                </Link>
                <div style={{
                    width: '100%',
                    height: '1px',
                    background: 'rgba(39, 40, 72, 0.2)',
                    margin: '20px 0 20px 0'
                }} />
                <Link to='/my-projects'>
                    <RippleButton className={styles.button} opacity={0.2}>
                        <span className={"material-symbols-rounded " + styles.icon + " " + styles['icon2']}>
                            local_fire_department
                        </span>
                        <p className={styles.text}>Мои идеи</p>
                    </RippleButton>
                </Link>
                {value['windowSize'] < 769 &&
                    <Link to='/my-profile'>
                        <RippleButton className={styles.button} opacity={0.2}>
                            <span className={"material-symbols-rounded " + styles.icon + " " + styles['icon2']}>
                                account_circle
                            </span>
                            <p className={styles.text}>Профиль</p>
                        </RippleButton>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Nav;