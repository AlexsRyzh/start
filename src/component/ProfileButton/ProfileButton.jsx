import React, { useState } from 'react'
import styles from './ProfileButton.module.scss'
import profileImg from './img/profImg.png'
import RippleButton from '../RippleButton/RippleButton'
import DropMenuContainer from '../DropMenu/DropMenu'
import ClickAwayListener from 'react-click-away-listener';

const ProfileButton = ({ imgUrl = 'public/profilimg.png', name = "alex" }) => {
    const [show, setShow] = useState(false)


    return (
        <ClickAwayListener onClickAway={() => { setShow(false) }}>
            <div>
                <DropMenuContainer show={show} setShow={setShow}>
                    <RippleButton duration={1000}
                        className={styles['profile_button'] + " " + (show ? styles["profile_check_button"] : '')}
                        opacity={0.2} colorRipple={'#fff'} onClick={() => { setShow(!show) }}>
                        <img src={profileImg} alt="profile" className={styles['profile_img']} />
                        <p className={styles['profile_text']}>Привет, <b className={styles['profile_name']}>{name}</b></p>
                        <span className={"material-symbols-rounded " + styles['profile_icon']}>
                            expand_more
                        </span>
                    </RippleButton>
                </DropMenuContainer>
            </div>
        </ClickAwayListener>
    )
}

export default ProfileButton