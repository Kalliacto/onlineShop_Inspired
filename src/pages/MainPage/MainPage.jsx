import React from 'react';
import s from './MainPage.module.scss';
import { useParams } from 'react-router-dom';
import Container from '../../components/Layout/Container/Container';

const MainPage = ({ gender = 'women' }) => {
    const { category } = useParams();

    return (
        <Container>
            
        </Container>
    );
};

export default MainPage;
