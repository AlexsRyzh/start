import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import LineTikets from '../../lineTikets/LineTikets'
import styles from './card_ticket.module.scss'

const CardTicket = ({ title, listTicket, color, numberOf = 4 }) => {
    const [list, setList] = useState(listTicket)
    useEffect(() => {
        resizeList(numberOf)
    }, [numberOf])

    const resizeList = (count) => {
        if (count === listTicket.length) {
            setList(listTicket)
        } else {
            setList(listTicket.slice(0, numberOf))
        }
    }


    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            <LineTikets listTicket={listTicket} color={color} numberOf={numberOf} />
        </div>
    )
}


export default CardTicket