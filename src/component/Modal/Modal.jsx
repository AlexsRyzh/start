import React from 'react'
import styles from ''
import { CSSTransition } from 'react-transition-group'
import { useRef } from 'react'

const Modal = ({ children, open = true, setOpen }) => {
    const nodeRef = useRef(null)

    return (
        <>
            <CSSTransition nodeRef={nodeRef} unmountOnExit in={open}>
                <div className={styles['container']} ref={nodeRef}>

                </div>
            </CSSTransition>

        </>
    )
}

export default Modal