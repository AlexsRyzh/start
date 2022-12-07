import React from 'react'
import styles from './block_with_pen.module.scss'

const BlockWithPen = ({ children, className, DisleftPadding = false }) => {

    return (
        <div className={styles['container']} style={{
            paddingLeft: (DisleftPadding && 0)
        }}>
            {children}
            <div className={styles['pen_container']}>
                <div className={"material-symbols-outlined " + styles['pen_icon'] + " " + className}>
                    edit
                </div>
                <p className={styles['pen_style_text']}>Изменить</p>
            </div>
        </div>
    )
}

export default BlockWithPen