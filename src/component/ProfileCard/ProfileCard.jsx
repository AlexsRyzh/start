import React, { useContext } from 'react'
import styles from './ProfileCard.module.scss'
import CardText from '../CardComponent/CardText/CardText.styled'
import CardTicket from '../CardComponent/CardTIcket/CardTicket'
import { Context } from '../../pages/MainPage/MainPage'
import imgProfile from '../../img/profImg.png'

const ProfileCard = ({ name = "Alexs", surname = 'Chapchuk', img = imgProfile }) => {
    const value = useContext(Context)

    return (
        <div className={styles['card']}>
            <div className={styles.button}>
                <img className={styles['img']} src={img} alt="" />
                <div>
                    <CardText fontSize={24}>{name + " " + surname}</CardText>
                    <CardTicket title={"Профессии"} listTicket={['BACKEND DEVELOPER', 'FRONTEND DEVELOPER']} color={'#272848'} numberOf={(value['windowSize'] < 450) ? 2 : 4} />
                    <CardTicket title={"Технологии в проекте"} listTicket={['SPRING FRAMEWORK', 'SPRING BOOT', 'SPRING SECURITY', 'VUE.JS', 'SPRING FRAMEWORK', 'SPRING BOOT', 'SPRING SECURITY', 'VUE.JS']} color={'#272848'} numberOf={(value['windowSize'] < 450) ? 2 : 4} />
                    <CardTicket title={"Языки программирования"} listTicket={['JAVA', 'JAVASCRIPT']} color={'#6D71F9'} numberOf={(value['windowSize'] < 450) ? 2 : 4} />
                </div>

            </div>
        </div>
    )
}

export default ProfileCard