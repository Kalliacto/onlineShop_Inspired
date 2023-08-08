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
import { getCategories } from './store/slices/navigationSlices';
import { getColors } from './store/slices/colorSlice';
import ProductPage from './pages/ProductPage/ProductPage';
import FavoritePage from './pages/FavoritePage/FavoritePage';
import CartPage from './pages/CartPage/CartPage';
import SearchPage from './pages/SearchPage/SearchPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element={<MainPage />} />
            <Route path='/catalog/:gender/:category?' element={<MainPage />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/favorite' element={<FavoritePage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/search' element={<SearchPage />} />
            {/* <Route path='women/:category' element={<MainPage gender='women' />} />
            <Route path='men' element={<MainPage gender='men' />} />
            <Route path='men/:category' element={<MainPage gender='men' />} />
            <Route path='kids' element={<MainPage gender='kids' />} />
            <Route path='kids/:category' element={<MainPage gender='kids' />} /> */}
            <Route path='*' element={<ErrorPage />} />
        </Route>
    )
);

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getColors());
    }, [dispatch]);

    return <RouterProvider router={router}></RouterProvider>;
};

export default App;
