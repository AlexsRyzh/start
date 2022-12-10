import React, { useState } from 'react'
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { MainPage } from '../pages/MainPage/MainPage';
import ListProjectPage from '../pages/ListProjectPage/ListProjectPage';
import ListProfilesPage from '../pages/ListProfilesPage/ListProfilesPage';
import MyProfilePage from '../pages/MyProfilePage/MyProfilePage';
import MyProjectsPage from '../pages/MyProjects/MyProjectsPage'
import ProjectPage from '../pages/ProjectPage/ProjectPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import MyProject from '../pages/MyProject/MyProject';



const Wrapper = ({ }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return null;
}

const App = () => {
    return (
        <BrowserRouter>
            <Wrapper />
            <Routes>
                <Route path='/' element={<MainPage />}>
                    <Route index element={<ListProjectPage />} />
                    <Route path='/profiles' element={<ListProfilesPage />} />
                    <Route path='/my-projects' element={<MyProjectsPage />} />
                </Route>
                <Route path='/' element={<MainPage filter={false} />}>
                    <Route path='/my-profile' element={<MyProfilePage />} />
                    <Route path='/project' element={<ProjectPage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route path='/my-project' element={<MyProject id={0} />} />
                    <Route path='/new-project' element={<MyProject id={-1} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App