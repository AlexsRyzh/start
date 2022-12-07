import React from 'react'
import LineTikets from '../../lineTikets/LineTikets'
import styles from './card_ticket.module.scss'

const CardTicket = ({ title, listTicket, color, numberOf = 4, full, fontSizeTitle, fontSizeDesc }) => {


    return (
        <div className={styles.container}>
            <p className={styles.title} style={{
                fontSize: fontSizeTitle
            }}>{title}</p>
            <LineTikets listTicket={listTicket} color={color} numberOf={numberOf} full={full} fontSize={fontSizeDesc} />
        </div>
    )
}


export default CardTicket