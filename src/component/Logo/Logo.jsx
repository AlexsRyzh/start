import React from 'react'
import styles from './logo.module.scss'
import RippleButton from '../RippleButton/RippleButton'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Link to='/'>
            <RippleButton className={styles.log_button} colorRipple={'white'} duration={1000} opacity={0.2}>
                <span className={"material-symbols-rounded " + styles['logo_img']}>
                    diversity_2
                </span>
                <h1 className={styles['logo_h1']}>Start</h1>
            </RippleButton>
        </Link>

    )
}

export default Logo;