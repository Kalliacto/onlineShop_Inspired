import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../store/slices/goodsSlice';
import GoodsList from '../../components/GoodsList/GoodsList';
import { usePageFromSearchParams } from '../../hooks/usePageFromSearchParams';
import s from './FavoritePage.module.scss';

const FavoritePage = (props) => {
    const dispatch = useDispatch();
    const { favorite: favoriteList } = useSelector((s) => s.favorite);
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
            {favoriteList.length ? (
                <GoodsList title={'Избранное'} />
            ) : (
                <h3 className={s.empty}>Вы ничего еще не добавили в избранное</h3>
            )}
        </>
    );
};

export default FavoritePage;
