import React, { useState, useEffect } from 'react'
import styles from './content.module.scss'
import InfiniteScroll from "react-infinite-scroll-component";
import Card from '../Card/CardContent';
import RippleButton from '../RippleButton/RippleButton'
import { useContext } from 'react';
import { Context } from '../../pages/MainPage/MainPage';
import BurgerMenu from '../BurgerMenuFilter/BurgerMenu';


const Content = ({ title, children }) => {
    const [items, setItems] = useState([]);
    const [hasMore, sethasMore] = useState(true);
    const [page, setpage] = useState(2);
    const [openFilter, setOpenFilter] = useState(false)
    const value = useContext(Context)

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=20`
                // For json server use url below
                // `http://localhost:3004/comments?_page=1&_limit=20`
            );
            const data = await res.json();
            setItems(data);
        };

        getComments();
    }, []);

    const fetchComments = async () => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=20`
            // For json server use url below
            // `http://localhost:3004/comments?_page=${page}&_limit=20`
        );
        const data = await res.json();
        return data;
    };

    const fetchData = async () => {
        const commentsFormServer = await fetchComments();

        setItems([...items, ...commentsFormServer]);
        if (commentsFormServer.length === 0 || commentsFormServer.length < 20) {
            sethasMore(false);
        }
        setpage(page + 1);
    };

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