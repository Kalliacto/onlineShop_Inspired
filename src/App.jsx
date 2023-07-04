import React from 'react';
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import Root from './routes/Root';
import MainPage from './pages/MainPage/MainPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element={<MainPage />} />
            <Route path='women' element={<MainPage gender='women' />} />
            <Route path='men' element={<MainPage gender='men' />} />
            <Route path='women/:category' element={<MainPage gender='women' />} />
            <Route path='men/:category' element={<MainPage gender='men' />} />
            <Route path='*' element={<ErrorPage />} />
        </Route>
    )
);

const App = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

export default App;
