import React, { useEffect } from 'react';
import Container from '../../components/Layout/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getGoods } from '../../store/slices/goodsSlice';
import s from './MainPage.module.scss';
import Product from '../../components/Product/Product';

const MainPage = ({ gender = 'women' }) => {
    const dispatch = useDispatch();
    const { goods } = useSelector((s) => s.goods);

    useEffect(() => {
        dispatch(getGoods(gender));
    }, [dispatch, gender]);

    return (
        <section className={s.goods}>
            <Container>
                <h2 className={s.title}>Новинки</h2>
                <ul className={s.list}>
                    {!!goods &&
                        goods.map((el) => {
                            return (
                                <li key={el.id}>
                                    <Product {...el} />
                                </li>
                            );
                        })}
                </ul>
            </Container>
        </section>
    );
};

export default MainPage;
