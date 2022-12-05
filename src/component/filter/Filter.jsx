import React from 'react'
import FilterSection from '../filterSection/FilterSection';
import styles from './filter.module.scss'


const Filter = () => {
    return (
        <div className={styles.container}>
            <h1>Фильтры</h1>
            <div className={styles['section']}>
                <div className={styles['title_section']}>
                    <span className={"material-symbols-rounded " + styles['icon']}>
                        manage_accounts
                    </span>
                    <p className={styles['text']}>Специалисты</p>
                </div>
                <FilterSection names={['Backend Developer', 'Game Developer', 'Desktop Developer', 'Frontend Developer', 'Android Developer']} />
            </div>


            <div className={styles['section']}>
                <div className={styles['title_section']}>
                    <span className={"material-symbols-rounded " + styles['icon']}>
                        terminal
                    </span>
                    <p className={styles['text']}>Языки программирования</p>
                </div>
                <FilterSection names={['Java', "JavaScript", 'C++', 'Python', 'Go', 'Rust', 'C']} />
            </div>


            <div className={styles['section']}>
                <div className={styles['title_section']}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className={styles['icon']}><path fill="none" stroke="#000000" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M25 21A4 4 0 1 0 25 29A4 4 0 1 0 25 21Z" /><path fill="none" stroke="#000000" strokeWidth="2.043" d="M24.97 16.393A22.534 8.593 0 1 0 24.97 33.579A22.534 8.593 0 1 0 24.97 16.393Z" transform="rotate(-60 24.97 24.986)" /><path fill="none" stroke="#000000" strokeWidth="2.019" d="M47,24.593c0,4.743-9.858,8.593-22,8.593s-22-3.85-22-8.593C3,19.85,12.858,16,25,16S47,19.85,47,24.593z" /><path fill="none" stroke="#000000" strokeWidth="2" d="M24.98 2.4800000000000004A8.593 22.534 0 1 0 24.98 47.548A8.593 22.534 0 1 0 24.98 2.4800000000000004Z" transform="rotate(-30 24.978 25.015)" /></svg>
                    <p className={styles['text']}>Технологии</p>
                </div>
                <FilterSection names={['React', 'Vue', 'Spring Boot', 'Angular', 'Django']} />
            </div>

        </div>
    )
}

export default Filter;