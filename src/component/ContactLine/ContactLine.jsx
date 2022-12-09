import React from 'react'
import { Tg } from '../ContactButton/ContactButton'
import styles from './contact_line.module.scss'

const ContactLine = ({ children }) => {
    return (
        <div className={styles['container']}>
            {children}
        </div>
    )
}

export default ContactLine