import React from 'react'
import CheckBox from '../CheckBox/CheckBox'
import styles from './filter_section.module.scss'

const FilterSection = ({ names = ['Backend Developer', 'Backend Developer'], active = true }) => {
    return (
        <div className={styles['sections'] + " " + (!active && styles['hidden'])}>
            {names.map((value, key) => (
                <div className={styles['section']} key={key}>
                    <CheckBox width={20} height={20} />
                    <p className={styles['text']}>{value}</p>
                </div>
            ))}

        </div>
    )
}

export default FilterSection