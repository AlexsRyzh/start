import React from 'react'
import LineTikets from '../../lineTikets/LineTikets'
import styles from './card_ticket.module.scss'

const CardTicket = ({ title, listTicket, color, numberOf = 4 }) => {


    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            <LineTikets listTicket={listTicket} color={color} numberOf={numberOf} />
        </div>
    )
}


export default CardTicket