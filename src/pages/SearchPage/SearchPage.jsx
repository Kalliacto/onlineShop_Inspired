import React, { useEffect } from 'react';
import s from './SearchPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getAll } from '../../store/slices/goodsSlice';
import GoodsList from '../../components/GoodsList/GoodsList';
import { getEndings } from '../../utils/utils';

const SearchPage = (props) => {
    const { goods: goodsList } = useSelector((s) => s.goods);
    const dispatch = useDispatch();
    let [searchParams] = useSearchParams();

    useEffect(() => {
        const search = searchParams.get('q');
        const params = { search };

        dispatch(getAll(params));
    }, [searchParams, dispatch]);

    return (
        <>
            {goodsList.length ? (
                <GoodsList
                    title={`По вашему запросу ${searchParams.get('q')} найдено ${
                        goodsList.length
                    } ${getEndings(goodsList.length, 'товар')}`}
                />
            ) : (
                <h3 className={s.empty}>
                    По вашему запросу {searchParams.get('q')} ничего не найдено{' '}
                </h3>
            )}
        </>
    );
};

export default SearchPage;
