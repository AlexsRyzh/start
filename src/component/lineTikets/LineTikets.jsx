import React, { useState, useEffect } from 'react'
import styles from './line_tikets.module.scss'

const LineTikets = ({ listTicket, color, numberOf = 4, full = false }) => {

    const [list, setList] = useState(listTicket)
    const resizeList = (count) => {
        if (count === listTicket.length) {
            setList(listTicket)
        } else {
            setList(listTicket.slice(0, numberOf))
        }
    }

    useEffect(() => {
        if (!full)
            resizeList(numberOf)
    }, [numberOf])


    return (
        <div className={styles.tickets}>
            {list.map((ticket, index) => (
                <div className={styles.ticket} key={index} style={{
                    background: color
                }}>
                    <p className={styles.ticket_text}>{ticket}</p>
                </div>
            ))}
            {list.length !== listTicket.length &&
                <div className={styles.ticket} style={{
                    background: color,
                    cursor: 'pointer',
                }}>
                    <p className={styles.ticket_text}>...</p>
                </div>
            }
        </div>
    )
}

export default LineTikets