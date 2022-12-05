import React from 'react'
import { useState } from 'react'
import { CheckBoxContainer } from './CheckBoxComponent.styled'
import styles from './check_box.module.scss'


const CheckBox = ({ ...props }) => {
    const [checked, setCheck] = useState(false)


    return (
        <div>
            <label className={styles['custom-checkbox']}>
                <input type="checkbox" className={styles['hidden']} checked={checked} onChange={() => setCheck(!checked)} />
                <CheckBoxContainer boderSize={2} boderColor={'#6D71F9'} borderRadius={5} checked={checked} props>
                    {checked &&
                        <span className={'material-symbols-rounded ' + styles['custome_icon']}>
                            done
                        </span>
                    }
                </CheckBoxContainer>
            </label>

        </div>
    )
}

export default CheckBox