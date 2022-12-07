import React, { useState, useEffect } from 'react'
import styles from './content.module.scss'
import RippleButton from '../RippleButton/RippleButton'
import { useContext } from 'react';
import { Context } from '../../pages/MainPage/MainPage';
import BurgerMenu from '../BurgerMenuFilter/BurgerMenu';
import { useScrollLock } from '../../hooks/useScrollLock';

const Content = ({ title, children }) => {
    const [openFilter, setOpenFilter] = useState(false)
    const value = useContext(Context)
    const { lockScroll, unlockScroll } = useScrollLock();


    useEffect(() => {
        if (openFilter) {
            lockScroll()
        } else {
            unlockScroll()
        }
    }, [openFilter])

    return (
        <div className={styles.container}>
            <div className={styles['title']}>
                <h1 className={styles.title}>{title}</h1>
                {value['windowSize'] < 1100 &&
                    <RippleButton colorRipple='#6D71F9' opacity={0.1} className={styles['ripple_btn']} duration={1000} onClick={() => {
                        setOpenFilter(!openFilter)
                    }}>
                        <div className={styles['filter_button']}>
                            <span className={"material-symbols-rounded " + styles['icon_filter']}>
                                tune
                            </span>
                            <p className={styles['filter_text']}>Фильтр</p>
                        </div>
                    </RippleButton>
                }
            </div>
            <BurgerMenu open={openFilter} setOpen={setOpenFilter} />
            {/* <InfiniteScroll
                dataLength={items.length} //This is important field to render the next data
                next={fetchData}
                hasMore={hasMore}
                loader={<p>Loading ...</p>}
                endMessage={<p>End</p>}
                scrollThreshold={1.0}
            >
                <div>
                    {items.map((item) => {
                        return <p key={item.id}>{item.id}</p>;
                    })}
                </div>

            </InfiniteScroll> */}
            {children}
        </div>
    )
}

export default Content;