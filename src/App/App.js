import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { MainPage } from '../pages/MainPage/MainPage';
import ListProjectPage from '../pages/ListProjectPage/ListProjectPage';
import ListProfilesPage from '../pages/ListProfilesPage/ListProfilesPage';
import MyProfilePage from '../pages/MyProfilePage/MyProfilePage';
import MyProjectsPage from '../pages/MyProjects/MyProjectsPage'
import ProjectPage from '../pages/ProjectPage/ProjectPage';

const Wrapper = ({ children }) => {
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    });
    return children
}

const App = () => {
    return (
        <BrowserRouter>
            <Wrapper>
                <Routes>
                    <Route path='/' element={<MainPage />}>
                        <Route index element={<ListProjectPage />} />
                        <Route path='/profiles' element={<ListProfilesPage />} />
                        <Route path='/my-project' element={<MyProjectsPage />} />
                    </Route>
                    <Route path='/' element={<MainPage filter={false} />}>
                        <Route path='/my-profile' element={<MyProfilePage />} />
                        <Route path='/project' element={<ProjectPage />} />
                    </Route>
                </Routes>
            </Wrapper>
        </BrowserRouter>
    )
}

export default App