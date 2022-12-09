import React, { useRef, useState } from 'react'
import Nav from '../nav/Nav'
import styles from './burger_nav.module.scss'
import { CSSTransition } from 'react-transition-group';
import './animation.css'

const BurgerNave = ({ active, setActive }) => {
    const nodeRef = useRef(null);
    return (
        <CSSTransition nodeRef={nodeRef} in={active} timeout={500} classNames="my-node" unmountOnExit>
            <div ref={nodeRef} className={styles['conteiner']}>
                <Nav SetClick={setActive} />
            </div>
        </CSSTransition>
    )
}

export default BurgerNave