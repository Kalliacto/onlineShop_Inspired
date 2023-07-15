import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../store/slices/goodsSlice';
import GoodsList from '../../components/GoodsList/GoodsList';

const FavoritePage = (props) => {
    const dispatch = useDispatch();
    const favoriteList = useSelector((s) => s.favorite);

    useEffect(() => {
        dispatch(getCategory({ list: favoriteList }));
    }, [favoriteList, dispatch]);

    return (
        <>
            <GoodsList title={'Избранное'} />
        </>
    );
};

export default FavoritePage;
