import React from 'react'
import Nav from '../nav/Nav'
import styles from './burger_nav.module.scss'

const BurgerNave = ({ active, setActive }) => {
    return (
        <div className={styles['conteiner'] + " " + (active && styles['open'])}>
            <Nav SetClick={setActive} />
        </div>
    )
}

export default BurgerNave