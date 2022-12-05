import React from 'react'
import styles from './contact_line.module.scss'
import { ReactComponent as FB } from '../../svg/facebook.svg'
import { ReactComponent as VK } from '../../svg/vk.svg'
import { ReactComponent as TG } from '../../svg/tg.svg'
import { ReactComponent as WT } from '../../svg/whatsap.svg'


const ContactLine = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['fb']}>
                <FB className={styles['fb_icon']} />
            </div>
            <div className={styles['vk']}>
                <VK className={styles['vk_icon']} />
            </div>
            <div className={styles['tg']}>
                <TG className={styles['tg_icon']} />
            </div>
            <div className={styles['wt']}>
                <WT className={styles['wt_icon']} />
            </div>
            <div className={styles['mail']}>
                <span className={"material-symbols-rounded " + styles['mail_icon']}>
                    mail
                </span>
            </div>
        </div>
    )
}

export default ContactLine