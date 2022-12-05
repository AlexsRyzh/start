import React from 'react'
import Content from '../../component/content/Content'
import ProfileCard from '../../component/ProfileCard/ProfileCard'

const ListProfilesPage = () => {
    return (
        <Content title={"Резюме"}>
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
        </Content>
    )
}

export default ListProfilesPage