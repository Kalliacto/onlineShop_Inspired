import React, { useEffect } from 'react';
import Gender from './Gender/Gender';
import Category from './Category/Category';
import Container from '../../Layout/Container/Container';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setActiveGender } from '../../../store/slices/navigationSlices';

const Navigation = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const gender = location.pathname.split('/')[1] || 'women';

    useEffect(() => {
        dispatch(setActiveGender(gender))
    }, [dispatch, gender])

    return (
        <nav>
            <Container>
                <Gender />
                <Category />
            </Container>
        </nav>
    );
};

export default Navigation;
