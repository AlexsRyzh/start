import React, { useRef } from 'react'
import styles from './burger_menu.module.scss'
import RippleButton from '../RippleButton/RippleButton'
import { useState } from 'react'
import FilterSection from '../filterSection/FilterSection'
import { CSSTransition } from 'react-transition-group';
import './burger_animation_filter.css'


const BurgerMenuFilter = ({ open, setOpen }) => {
    const [active, setActive] = useState(1)
    const nodeRef = useRef(null)

    return (
        <CSSTransition nodeRef={nodeRef} in={open} timeout={500} classNames="filter" unmountOnExit>
            <div className={styles['container']} ref={nodeRef}>
                <div className={styles['title']}>
                    <span className="material-symbols-rounded" onClick={() => setOpen(!open)}>
                        arrow_back
                    </span>
                    <h1>Фильтры</h1>
                </div>
                <div className={styles['content']}>
                    <div className={styles['option_name']}>
                        <RippleButton className={styles.button + " " + (active === 1 && styles['active'])} opacity={0.2} onClick={() => setActive(1)}>
                            <span className={"material-symbols-rounded " + styles.icon}>
                                manage_accounts
                            </span>
                            <p className={styles.text}>Специалисты</p>
                        </RippleButton>
                        <RippleButton className={styles.button + " " + (active === 2 && styles['active'])} opacity={0.2} onClick={() => setActive(2)}>
                            <span className={"material-symbols-rounded " + styles.icon}>
                                terminal
                            </span>
                            <p className={styles['text']}>Языки программирования</p>
                        </RippleButton>
                        <RippleButton className={styles.button + " " + (active === 3 && styles['active'])} opacity={0.2} onClick={() => setActive(3)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className={styles['icon']}><path fill="none" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M25 21A4 4 0 1 0 25 29A4 4 0 1 0 25 21Z" /><path fill="none" strokeWidth="2.043" d="M24.97 16.393A22.534 8.593 0 1 0 24.97 33.579A22.534 8.593 0 1 0 24.97 16.393Z" transform="rotate(-60 24.97 24.986)" /><path fill="none" strokeWidth="2.019" d="M47,24.593c0,4.743-9.858,8.593-22,8.593s-22-3.85-22-8.593C3,19.85,12.858,16,25,16S47,19.85,47,24.593z" /><path fill="none" strokeWidth="2" d="M24.98 2.4800000000000004A8.593 22.534 0 1 0 24.98 47.548A8.593 22.534 0 1 0 24.98 2.4800000000000004Z" transform="rotate(-30 24.978 25.015)" /></svg>
                            <p className={styles['text']}>Технологии</p>
                        </RippleButton>
                    </div>
                    <div className={styles['options']}>
                        <FilterSection names={['Backend Developer', 'Game Developer', 'Desktop Developer', 'Frontend Developer', 'Android Developer']} active={(active === 1)} />
                        <FilterSection names={['Java', "JavaScript", 'C++', 'Python', 'Go', 'Rust', 'C']} active={(active === 2)} />
                        <FilterSection names={['React', 'Vue', 'Spring Boot', 'Angular', 'Django']} active={(active === 3)} />
                    </div>
                </div>
            </div>
        </CSSTransition>

    )
}

export default BurgerMenuFilter