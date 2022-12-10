import React from 'react'
import styles from './modal.module.scss'
import { CSSTransition } from 'react-transition-group'
import { useRef } from 'react'
import { useContext } from 'react'
import { Context } from '../../pages/MainPage/MainPage'
import './animation_modal.css'
import { useScrollLock } from '../../hooks/useScrollLock'
import { useEffect, useState } from 'react'
import Sheet from 'react-modal-sheet';
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'

const Modal = ({ children, open = true, setOpen, title = "Название", }) => {
    const nodeRef = useRef(null)
    const value = useContext(Context)
    const [lockScroll, unlockScroll] = useScrollLock()

    const onDismiss = () => {
        setOpen(false)
    }
    const [expandOnContentDrag, setExpandOnContentDrag] = useState(false)
    const sheetRef = React.useRef()
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
                <>
                    <button onClick={() => setOpen(true)}>Open</button>
                    <BottomSheet
                        open={open}
                        ref={sheetRef}
                        skipInitialTransition
                        onDismiss={onDismiss}
                        defaultSnap={({ snapPoints, lastSnap }) => lastSnap ?? snapPoints[1]}
                        snapPoints={({ height, minHeight, maxHeight }) => [
                            maxHeight - maxHeight / 5,
                            Math.min(Math.max(height, minHeight), maxHeight * 0.525)
                        ]}
                        expandOnContentDrag={expandOnContentDrag}
                    >
                        <div>
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

                    </BottomSheet>
                </>

            }

        </>
    )
}

export default Modal