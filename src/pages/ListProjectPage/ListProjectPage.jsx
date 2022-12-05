import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../component/Card/CardContent'
import Content from '../../component/content/Content'

const ListProjectPage = () => {
    let arr = (new Array(10)).fill(0)
    return (
        <Content title={"Проекты"}>
            {arr.map((value, index) => (
                <Link to='/project' key={index}>
                    <Card />
                </Link>

            ))}
        </Content>
    )
}

export default ListProjectPage