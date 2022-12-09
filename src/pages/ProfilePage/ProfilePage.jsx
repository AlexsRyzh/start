import React from 'react'
import styles from './profile_page.module.scss'
import img from '../../img/profImg.png'
import ContactLine from '../../component/ContactLine/ContactLine'
import LineTikets from '../../component/lineTikets/LineTikets'
import RippleButton from '../../component/RippleButton/RippleButton'
import { Fb, Gt, Mail, Tg, Vk, Wt } from '../../component/ContactButton/ContactButton'

const ProfilePage = () => {
    return (
        <div className={styles['container']}>
            <img src={img} className={styles['prof_img']} alt="" />
            <h1 className={styles['name']}>Alexander Chapchuk</h1>
            <h2 className={styles['contact_title']}>Контакты</h2>



            <ContactLine>
                <Fb />
                <Tg />
                <Vk />
                <Wt />
                <Mail />
                <Gt />
            </ContactLine>


            <div className={styles['info_content']}>
                <div className={styles['info_section']}>
                    <h2 className={styles['info_text']}>Профессии</h2>
                    <div className={styles['list_tickets_content']}>
                        <LineTikets listTicket={['BACKEND DEVELOPER']} color={'#6D71F9'} full={true} />
                    </div>
                </div>
                <div className={styles['info_section']}>
                    <h2 className={styles['info_text']}>Технологии</h2>
                    <div className={styles['list_tickets_content']}>
                        <LineTikets listTicket={['SPRING FRAMEWORK', 'SPRING BOOT', 'SPRING SECURITY', 'VUE.JS', 'SPRING FRAMEWORK', 'SPRING BOOT', 'SPRING SECURITY', 'VUE.JS']} color={'#6D71F9'} full={true} />
                    </div>
                </div>
                <div className={styles['info_section']}>
                    <h2 className={styles['info_text']}>Языки программирования</h2>
                    <div className={styles['list_tickets_content']}>
                        <LineTikets listTicket={['JAVA', 'JAVASCRIPT']} color={'#6D71F9'} full={true} />
                    </div>
                </div>


                <div className={styles['experience_container']}>
                    <h2 className={styles['info_text']}>Опыт</h2>
                    <div className={styles['text_area']}></div>
                </div>


                <RippleButton colorRipple={'#fff'} className={styles['btn']} opacity={0.2}>
                    Сохранить
                </RippleButton>
            </div>
        </div>
    )
}

export default ProfilePage