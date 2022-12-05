import React, { useState } from 'react'
import styles from './card_content.module.scss'
import CardProfile from '../CardComponent/CardProfile/CardProfile';
import CardText from '../CardComponent/CardText/CardText.styled'
import CardTicket from '../CardComponent/CardTIcket/CardTicket';
import { Context } from '../../pages/MainPage/MainPage';
import { useContext } from 'react'


const Card = (props) => {
    const value = useContext(Context)
    return (
        <div className={styles['card']} {...props}>
            <div className={styles.button}>
                <CardProfile />
                <CardText fontSize={24}>DevBuff</CardText>
                <CardText fontSize={14}>DevBuff - это площадка где разработчики разных специальностей могут находит друг друга и создавать проекты совместно</CardText>
                <CardTicket title={"Специалисты"} listTicket={['BACKEND DEVELOPER', 'FRONTEND DEVELOPER']} color={'#272848'} numberOf={(value['windowSize'] < 450) ? 2 : 4} />
                <CardTicket title={"Технологии в проекте"} listTicket={['SPRING FRAMEWORK', 'SPRING BOOT', 'SPRING SECURITY', 'VUE.JS', 'SPRING FRAMEWORK', 'SPRING BOOT', 'SPRING SECURITY', 'VUE.JS']} color={'#272848'} numberOf={(value['windowSize'] < 450) ? 2 : 4} />
                <CardTicket title={"Языки программирования"} listTicket={['JAVA', 'JAVASCRIPT']} color={'#6D71F9'} numberOf={(value['windowSize'] < 450) ? 2 : 4} />
            </div>
        </div >
    )
}

export default Card