import React from 'react'
import Content from '../../component/content/Content'
import Card from '../../component/Card/CardContent'
import { Link } from 'react-router-dom'

const MyProjectPage = () => {
    let arr = (new Array(10)).fill(0)
    return (
        <Content title={"Мои проекты"}>
            {arr.map((value, index) => (
                <Link to='/my-project' key={index}>
                    <Card />
                </Link>

            ))}
        </Content>
    )
}

export default MyProjectPage