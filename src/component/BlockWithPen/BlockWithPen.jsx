import React from 'react'
import styles from './block_with_pen.module.scss'

const BlockWithPen = ({ children, className }) => {

    return (
        <div className={styles['container']}>
            {children}
            <span className={styles['pen_container']}>
                <span className={"material-symbols-outlined " + styles['pen_icon'] + " " + className}>
                    edit
                </span>
                <p className={styles['pen_style_text']}>Изменить</p>
            </span>
        </div>
    )
}

export default BlockWithPen