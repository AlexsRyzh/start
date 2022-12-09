import React, { useState, useEffect } from 'react'
import styles from './content.module.scss'
import RippleButton from '../RippleButton/RippleButton'
import { useContext } from 'react';
import { Context } from '../../pages/MainPage/MainPage';
import BurgerMenu from '../BurgerMenuFilter/BurgerMenu';
import { useScrollLock } from '../../hooks/useScrollLock';
import { Link } from 'react-router-dom';

const Content = ({ title, children, edit = false }) => {
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
                <div className={styles['btn_container']}>
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
                    {edit &&
                        <Link to='/new-project'>
                            <RippleButton colorRipple='white' opacity={0.3} className={styles['ripple_btn'] + ' ' + styles['add_button']} duration={1000} >
                                <div className={styles['filter_button']}>
                                    <span className={"material-symbols-rounded " + styles['icon_filter']}>
                                        add
                                    </span>
                                    <p className={styles['filter_text']}>Добавить</p>
                                </div>
                            </RippleButton>
                        </Link>
                    }
                </div>

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