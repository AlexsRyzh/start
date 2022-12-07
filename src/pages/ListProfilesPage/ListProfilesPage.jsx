import React from 'react'
import Content from '../../component/content/Content'
import ProfileCard from '../../component/ProfileCard/ProfileCard'
import { Link } from 'react-router-dom'

const ListProfilesPage = () => {
    let arr = (new Array(10)).fill(0)
    return (
        <Content title={"Резюме"}>
            {arr.map((value, index) => (
                <Link to='/profile' key={index}>
                    <ProfileCard />
                </Link>

            ))}
        </Content>
    )
}

export default ListProfilesPage