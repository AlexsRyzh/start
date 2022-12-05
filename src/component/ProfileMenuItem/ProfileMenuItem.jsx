import React from 'react'
import RippleButton from '../RippleButton/RippleButton'
import styles from './profile_menu_item.module.scss'

const ProfileMenuItem = ({ children, className, ...props }) => {
  return (
    <RippleButton className={className + " " + styles['profile_block']} {...props}>
      {children}
    </RippleButton>
  )
}

export default ProfileMenuItem