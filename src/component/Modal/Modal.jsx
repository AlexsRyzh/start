import React from 'react'
import styles from './modal.module.scss'
import { CSSTransition } from 'react-transition-group'
import { useRef } from 'react'
import { useContext } from 'react'
import { Context } from '../../pages/MainPage/MainPage'
import './animation_modal.css'
import { useScrollLock } from '../../hooks/useScrollLock'
import { useEffect } from 'react'
import Sheet from 'react-modal-sheet';


const Modal = ({ children, open = true, setOpen, title = "Название", }) => {
    const nodeRef = useRef(null)
    const value = useContext(Context)
    const [lockScroll, unlockScroll] = useScrollLock()




    return (
        <>
            {value['windowSize'] >= 769 &&
                <CSSTransition nodeRef={nodeRef} unmountOnExit in={Boolean(open)} timeout={200} classNames="modal">
                    <div className={styles['background_modal']} ref={nodeRef} onClick={(e) => {
                        if (e.currentTarget === e.target)
                            setOpen()
                    }}>
                        <div className={styles['container']}>
                            <div className={styles['header']}>
                                <h1>{title}</h1>
                                <span className={"material-symbols-rounded" + " " + styles['close_button']} onClick={() => {
                                    setOpen()
                                }}>
                                    close
                                </span>
                            </div>
                            <div className={styles['content']}>
                                {children}
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            }
            {value['windowSize'] < 769 &&
                <Sheet isOpen={open} onClose={() => setOpen(false)}>
                    <Sheet.Container>
                        <Sheet.Header />
                        <Sheet.Content>

                        </Sheet.Content>
                    </Sheet.Container>

                    <Sheet.Backdrop />
                </Sheet>
            }

        </>
    )
}

export default Modal