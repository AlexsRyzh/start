import React, { useState } from 'react'
import { useContext } from 'react'
import BlockWithPen from '../../component/BlockWithPen/BlockWithPen'
import ContactLine from '../../component/ContactLine/ContactLine'
import { Context } from '../MainPage/MainPage'
import LineTikets from '../../component/lineTikets/LineTikets'
import styles from './my_profile_page.module.scss'
import RippleButton from '../../component/RippleButton/RippleButton'

const MyProfilePage = ({ img = {}, name = 'Alexander', surname = 'Chapchuk' }) => {
    const value = useContext(Context)

    return (
        <div className={styles['container']}>
            <div className={styles['profile_icon']}>
                <img src={value['img']} alt="" className={styles['profile_img']} />
                <span className={styles['change_container']}>
                    <span className={"material-symbols-outlined " + styles['change_icon']}>
                        add_a_photo
                    </span>
                </span>
            </div>


            <BlockWithPen>
                <h1 className={styles['name']}>{name} {surname}</h1>
            </BlockWithPen>

            <BlockWithPen>
                <h2 className={styles['contact_title']}>Контакты</h2>
            </BlockWithPen>

            <ContactLine />



            <div className={styles['info_content']}>
                <div className={styles['info_section']}>
                    <BlockWithPen className={styles['pen']}>
                        <h2 className={styles['info_text']}>Профессии</h2>
                    </BlockWithPen>
                    <div className={styles['list_tickets_content']}>
                        <LineTikets listTicket={['BACKEND DEVELOPER']} color={'#6D71F9'} full={true} />
                    </div>
                </div>
                <div className={styles['info_section']}>
                    <BlockWithPen className={styles['pen']}>
                        <h2 className={styles['info_text']}>Технологии</h2>
                    </BlockWithPen>
                    <div className={styles['list_tickets_content']}>
                        <LineTikets listTicket={['SPRING FRAMEWORK', 'SPRING BOOT', 'SPRING SECURITY', 'VUE.JS', 'SPRING FRAMEWORK', 'SPRING BOOT', 'SPRING SECURITY', 'VUE.JS']} color={'#6D71F9'} full={true} />
                    </div>
                </div>
                <div className={styles['info_section']}>
                    <BlockWithPen className={styles['pen']}>
                        <h2 className={styles['info_text']}>Языки программирования</h2>
                    </BlockWithPen>
                    <div className={styles['list_tickets_content']}>
                        <LineTikets listTicket={['JAVA', 'JAVASCRIPT']} color={'#6D71F9'} full={true} />
                    </div>
                </div>




                <div className={styles['experience_container']}>
                    <h2 className={styles['info_text']}>Опыт</h2>
                    <textarea className={styles['text_area']}></textarea>
                </div>


                <RippleButton colorRipple={'#fff'} className={styles['btn']} opacity={0.2}>
                    Сохранить
                </RippleButton>
            </div>

        </div>
    )
}

export default MyProfilePage