import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Main from '../components/Layout/Main/Main';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    );
};

export default Root;
