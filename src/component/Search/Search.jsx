import React from 'react'
import styles from './serach.module.scss'

const Search = () => {
    return (
        <div className={styles['container']}>
            <input type="text" className={styles['custom_input']} />
            <span className={'material-symbols-rounded ' + styles['icon']}>
                search
            </span>
        </div>
    )
}

export default Search