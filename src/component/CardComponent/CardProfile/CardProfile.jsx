import React from 'react'
import imgProfile from '../../ProfileButton/img/profImg.png'
import styles from './card_profile.module.scss'


function CardProfile({ img = imgProfile, name = 'Alexander', surname = 'Chapchuk' }) {
    return (
        <div className={styles.container}>
            <img src={img} alt="" className={styles.img} />
            <p className={styles.text}>{name} {surname}</p>
        </div>
    )
}

export default CardProfile