import React from 'react'
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from '../pages/MainPage/MainPage';
import ListProjectPage from '../pages/ListProjectPage/ListProjectPage';
import ListProfilesPage from '../pages/ListProfilesPage/ListProfilesPage';
import MyProfilePage from '../pages/MyProfilePage/MyProfilePage';
import MyProjectsPage from '../pages/MyProjects/MyProjectsPage'
import ProjectPage from '../pages/ProjectPage/ProjectPage';

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<MainPage />}>
                    <Route index element={<ListProjectPage />} />
                    <Route path='/profiles' element={<ListProfilesPage />} />
                    <Route path='/my-project' element={<MyProjectsPage />} />
                </Route>
                <Route path='/' element={<MainPage filter={false} />}>
                    <Route path='/my-profile' element={<MyProfilePage />} />
                    <Route path='/project' element={<h1>sfjsfs</h1>} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default App