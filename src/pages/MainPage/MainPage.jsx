import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategory, getGender } from '../../store/slices/goodsSlice';
import { useParams } from 'react-router-dom';
import { setActiveGender } from '../../store/slices/navigationSlices';
import GoodsList from '../../components/GoodsList/GoodsList';

const MainPage = () => {
    const { category, gender } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (gender && category) {
            dispatch(getCategory({ gender, category }));
            return () => {};
        }
        if (gender) {
            dispatch(getGender(gender));
            return;
        }
        dispatch(setActiveGender(gender));
    }, [dispatch, gender, category]);

    return (
        <>
            <div></div>
            <GoodsList category={category} />
        </>
    );
};

export default MainPage;
