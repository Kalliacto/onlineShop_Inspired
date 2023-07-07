import React, { useEffect } from 'react';
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import Root from './routes/Root';
import MainPage from './pages/MainPage/MainPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { useDispatch } from 'react-redux';
import { getCategories } from "./store/slices/navigationSlices";

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
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return <RouterProvider router={router}></RouterProvider>;
};

export default App;
