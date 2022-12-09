import React from 'react'
import { ContactButtonBlock } from './ContactButton.styled'
import { ReactComponent as FB } from '../../svg/facebook.svg'
import { ReactComponent as VK } from '../../svg/vk.svg'
import { ReactComponent as TG } from '../../svg/tg.svg'
import { ReactComponent as WT } from '../../svg/whatsap.svg'
import { ReactComponent as GT } from '../../svg/github.svg'
import styles from './contact_button.module.scss'

const Fb = ({ link = '#' }) => {
    return (
        <a href={link}>
            <ContactButtonBlock background={'#1977F2'}>
                <FB className={styles['fb_icon']} />
            </ContactButtonBlock>
        </a>

    )
}
const Vk = ({ link = '#' }) => {
    return (
        <a href={link}>
            <ContactButtonBlock background={'#1977F2'} >
                <VK className={styles['vk_icon']} />
            </ContactButtonBlock>
        </a>

    )
}
const Tg = ({ link = '#' }) => {
    return (
        <a href={link}>
            <ContactButtonBlock background={'#1977F2'}>
                <TG className={styles['tg_icon']} />
            </ContactButtonBlock>
        </a>

    )
}
const Wt = ({ link = '#' }) => {
    return (
        <a href={link}>
            <ContactButtonBlock background={'#41E360'} >
                <WT className={styles['wt_icon']} />
            </ContactButtonBlock>
        </a>
    )
}
const Mail = ({ link = '#' }) => {
    return (
        <a href={link}>
            <ContactButtonBlock background={'#6D71F9'} >
                <span className={"material-symbols-rounded " + styles['mail_icon']}>
                    mail
                </span>
            </ContactButtonBlock>
        </a>

    )
}

const Gt = ({ link = '#' }) => {
    return (
        <a href={link}>
            <ContactButtonBlock background={'black'}>
                <GT className={styles['github_icon']} />
            </ContactButtonBlock>
        </a>
    )
}

export { Fb, Vk, Tg, Wt, Mail, Gt }