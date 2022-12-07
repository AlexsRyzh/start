import React, { useState, createContext } from 'react'
import Header from '../../component/header/Header'
import Nav from "../../component/nav/Nav"
import Filter from '../../component/filter/Filter'
import './main_page.scss'
import '../../fonts/fonts.scss'
import { useEffect } from 'react'
import { Outlet } from "react-router-dom";
import profile_img from '../../img/profImg.png'

const Context = createContext()

const MainPage = ({ filter = true }) => {

    const [windowSize, setWindow] = useState();
    const [hidde, setHidde] = useState(true)

    const handleSubscribe = () => {
        setWindow(window.innerWidth)
    }

    const onSubscribe = () => {
        window.addEventListener('resize', handleSubscribe)
    }

    const offSubscribe = () =>
        window.removeEventListener('resize', handleSubscribe)
    useEffect(() => {
        onSubscribe()
        handleSubscribe()
        return () => offSubscribe()
    }, [])
    return (
        <Context.Provider value={
            {
                'windowSize': windowSize,
                'img': profile_img,
                'hidd': hidde,
                'setHidd': setHidde
            }
        }>
            <div className={'container'}>
                <Header />
                <main>
                    <div className='content'>
                        {windowSize > 768 &&
                            <Nav />
                        }
                        <Outlet />
                        {windowSize > 1100 &&
                            filter &&
                            <Filter />
                        }
                    </div>
                </main>
            </div>
        </Context.Provider>

    )
}

export { MainPage, Context };