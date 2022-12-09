import React, { useRef } from 'react'
import styles from './my_project.module.scss'
import ImgSlider from '../../component/imgSlider/ImgSlider'
import ContactLine from '../../component/ContactLine/ContactLine'
import { useState } from 'react'
import BlockWithPen from '../../component/BlockWithPen/BlockWithPen'
import LineTikets from '../../component/lineTikets/LineTikets'
import RippleButton from '../../component/RippleButton/RippleButton'
import ContentEditable from 'react-contenteditable'

const MyProject = ({ id = -1 }) => {
    const [title, setTitle] = useState(id === -1 ? "" : 'DevBuff')
    const [desc, setDesc] = useState(id === -1 ? "" : 'DevBuff - это площадка где разработчики разных специальностей могут находит друг друга и создавать проекты совместно. DevBuff - это площадка где разработчики разных специальностей могут находит друг друга и создавать проекты совместно. DevBuff - это площадка где разработчики разных специальностей могут находит друг друга и создавать проекты совместно.')

    const contentEditableRef = useRef(null);

    const handleChange = evt => {
        setDesc(evt.target.value);
    };




    return (
        <div className={styles['container']}>
            <div className={styles['title_container']}>
                <input type='text' className={styles['title']} value={title} onChange={(event) => { setTitle(event.target.value) }} placeholder='Название' required />
            </div>

            <ContentEditable className={styles['description'] + ' ' + (desc.length === 0 && styles['placehold'])} innerRef={contentEditableRef} html={desc} onChange={handleChange} />
            <div className={styles['section']}>
                <BlockWithPen DisleftPadding={true}>
                    <h2 className={styles['title_description']}>Фото</h2>
                </BlockWithPen>
            </div>

            <ImgSlider id={id} />
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
            <RippleButton colorRipple={'#fff'} className={styles['btn']} opacity={0.2}>
                Сохранить
            </RippleButton>
        </div>
    )
}

export default MyProject