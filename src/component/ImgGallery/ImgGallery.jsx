import React from 'react'
import styles from './img_gallery.module.scss'
import img from '../../img/1.jpg'

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

const ImgGallery = () => {
    const data = new Array(4).fill(img)
    return (
        <div className={styles['grid0']}>
            {data.length === 1 &&
                <img src={data[0]} alt="" srcset="" />
            }
            {data.length === 2 &&
                <div className={styles['grid']}>
                    {data.map((value) => (
                        <img src={value} alt="" srcset="" />
                    ))}
                </div>
            }
            {(data.length > 2) &&
                <div className={styles['grid1'] + " " + (data.length === 3 && styles['grid3'])}>
                    {data.slice(0, (data.length < 4 ? data.length : 4)).map((value, index) => (
                        <div className={styles['elem']} style={{
                            gridArea: "v" + (index + 1)
                        }} >
                            <img src={value} alt="" />
                            {index === 4 &&
                                <span className={styles['info']}>+{data.length - 4}</span>
                            }
                        </div>
                    ))}
                </div>
            }
        </div>

    )
}

export default ImgGallery