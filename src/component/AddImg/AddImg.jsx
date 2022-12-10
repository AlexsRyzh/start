import React, { useState } from 'react'
import styles from './add_img.module.scss'
import img from '../../img/1.jpg'


const AddImg = () => {
    const [nowImg, setNowImg] = useState('')
    const [imgCollection, setImgCollection] = useState([])

    const onSubmit = (e) => {
        e.preventDefault()
        if (nowImg !== '') {
            setImgCollection([...imgCollection, nowImg])
            setNowImg('')
        }

    };

    const onChange = (e) => {
        const file = URL.createObjectURL(e.target.files[0]);
        setNowImg(file)
    }


    return (
        <div className={styles['container']}>
            <form className={styles['action']} onSubmit={onSubmit} >
                {nowImg !== '' &&
                    <img src={nowImg} alt="" className={styles['present_img']} />
                }
                {nowImg === '' &&
                    <span className={"material-symbols-rounded" + " " + styles['empty_img'] + ' ' + styles['present_img']}>
                        image
                    </span>
                }
                <div className={styles['button']}>
                    <label className={styles['button']}>
                        <div className={styles['add_btn']}>
                            Добавить фото
                        </div>
                        <input type="file" name="image" onChange={onChange} style={{
                            display: 'none'
                        }} />
                    </label>
                    <button className={styles['add_btn']}>
                        Сохранить
                    </button>
                </div>
            </form>
            <div className={styles['img_gallery']}>
                {imgCollection.map((value, index) => (
                    <div className={styles['img_show_container']}>
                        <img src={value} key={index} alt="" className={styles['img_show']} />
                        <span className={"material-symbols-rounded" + " " + styles['del_btn']} onClick={() => {
                            setImgCollection([...imgCollection.slice(0, index), ...imgCollection.slice(index + 1)]);
                        }}>
                            delete
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AddImg