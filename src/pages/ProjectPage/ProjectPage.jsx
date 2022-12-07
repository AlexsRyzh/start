import React from 'react'
import styles from './project_page.module.scss'
import CardProfile from '../../component/CardComponent/CardProfile/CardProfile'
import img from '../../img/1.jpg'
import ImgGallery from '../../component/ImgGallery/ImgGallery'
import ContactLine from '../../component/ContactLine/ContactLine'
import CardTicket from '../../component/CardComponent/CardTIcket/CardTicket'
import ImgSlider from '../../component/imgSlider/ImgSlider'

const ProjectPage = ({ title = 'DevBuff' }) => {


  return (
    <div className={styles['container']}>
      <CardProfile />
      <h1 className={styles['title']}>{title}</h1>
      <h2 className={styles['title_description']}>Описание:</h2>
      <p className={styles['description']}>DevBuff - это площадка где разработчики разных специальностей могут находит друг друга и создавать проекты совместно. DevBuff - это площадка где разработчики разных специальностей могут находит друг друга и создавать проекты совместно. DevBuff - это площадка где разработчики разных специальностей могут находит друг друга и создавать проекты совместно. </p>
      <h2 className={styles['title_description']}>Фото:</h2>
      <ImgSlider />
      <h2 className={styles['title_description']}>Контакты:</h2>
      <div className={styles['contact']}>
        <ContactLine />
      </div>
      <CardTicket title={"Специалисты"} listTicket={['BACKEND DEVELOPER', 'FRONTEND DEVELOPER']} color={'#272848'} full={true} fontSizeDesc={'14px'} fontSizeTitle={'24px'} />
      <CardTicket title={"Технологии в проекте"} listTicket={['SPRING FRAMEWORK', 'SPRING BOOT', 'SPRING SECURITY', 'VUE.JS', 'SPRING FRAMEWORK', 'SPRING BOOT', 'SPRING SECURITY', 'VUE.JS']} color={'#272848'} full={true} fontSizeDesc={'14px'} fontSizeTitle={'24px'} />
      <CardTicket title={"Языки программирования"} listTicket={['JAVA', 'JAVASCRIPT']} color={'#6D71F9'} full={true} fontSizeDesc={'14px'} fontSizeTitle={'24px'} />
    </div>
  )
}

export default ProjectPage