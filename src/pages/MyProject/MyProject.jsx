import React from 'react'
import styles from './my_project.module.scss'
import ImgSlider from '../../component/imgSlider/ImgSlider'
import ContactLine from '../../component/ContactLine/ContactLine'
import { useState } from 'react'
import BlockWithPen from '../../component/BlockWithPen/BlockWithPen'
import LineTikets from '../../component/lineTikets/LineTikets'


const MyProject = () => {
    const [title, setTitle] = useState('DevBuff')
    const [desc, setDesc] = useState('DevBuff - это площадка где разработчики разных специальностей могут находит друг друга и создавать проекты совместно. DevBuff - это площадка где разработчики разных специальностей могут находит друг друга и создавать проекты совместно. DevBuff - это площадка где разработчики разных специальностей могут находит друг друга и создавать проекты совместно.')

    return (
        <div className={styles['container']}>
            <input type='text' className={styles['title']} value={title} onChange={(event) => { setTitle(event.target.value) }} placeholder='Название' required />
            <h2 className={styles['title_description']}>Описание</h2>
            <div contentEditable={true} suppressContentEditableWarning={true} className={styles['description']}  >
                {desc}
            </div>
            <div className={styles['section']}>
                <BlockWithPen DisleftPadding={true}>
                    <h2 className={styles['title_description']}>Фото</h2>
                </BlockWithPen>
            </div>

            <ImgSlider />
            <div className={styles['section']}>
                <BlockWithPen DisleftPadding={true}>
                    <h2 className={styles['title_description']}>Контакты</h2>
                </BlockWithPen>
            </div>
            <div className={styles['contact']}>
                <ContactLine />
            </div>
            <div className={styles['section']}>
                <BlockWithPen DisleftPadding={true}>
                    <h2 className={styles['title_description']}>Специалисты</h2>
                </BlockWithPen>
                <div className={styles['ticket_line']}>
                    <LineTikets listTicket={['BACKEND DEVELOPER', 'FRONTEND DEVELOPER']} color={'#272848'} full={true} fontSize={'14px'} />
                </div>

            </div>
            <div className={styles['section']}>
                <BlockWithPen DisleftPadding={true}>
                    <h2 className={styles['title_description']}>Технологии в проекте</h2>
                </BlockWithPen>
                <div className={styles['ticket_line']}>
                    <LineTikets listTicket={['SPRING FRAMEWORK', 'SPRING BOOT', 'SPRING SECURITY', 'VUE.JS', 'SPRING FRAMEWORK', 'SPRING BOOT', 'SPRING SECURITY', 'VUE.JS']} color={'#272848'} full={true} fontSize={'14px'} />
                </div>
            </div>
            <div className={styles['section']}>
                <BlockWithPen DisleftPadding={true}>
                    <h2 className={styles['title_description']}>Языки программирования</h2>
                </BlockWithPen>
                <div className={styles['ticket_line']}>
                    <LineTikets listTicket={['JAVA', 'JAVASCRIPT']} color={'#272848'} full={true} fontSize={'14px'} />
                </div>
            </div>
        </div>
    )
}

export default MyProject