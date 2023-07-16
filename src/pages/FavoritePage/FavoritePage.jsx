import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../store/slices/goodsSlice';
import GoodsList from '../../components/GoodsList/GoodsList';
import { usePageFromSearchParams } from '../../hooks/usePageFromSearchParams';

const FavoritePage = (props) => {
    const dispatch = useDispatch();
    const favoriteList = useSelector((s) => s.favorite);
    const page = usePageFromSearchParams(dispatch);

    useEffect(() => {
        if (!!favoriteList) {
            const param = { list: favoriteList };
            if (page) {
                param.page = page;
            }
            dispatch(getCategory(param));
        }
    }, [favoriteList, dispatch, page]);

    return (
        <>
            <GoodsList title={'Избранное'} />
        </>
    );
};

export default FavoritePage;
