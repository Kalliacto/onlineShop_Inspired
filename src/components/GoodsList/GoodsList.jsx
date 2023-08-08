import Container from '../Layout/Container/Container';
import Pagination from '../Pagination/Pagination';
import Preloader from '../Preloader/Preloader';
import Product from '../Product/Product';
import s from './GoodsList.module.scss';
import React from 'react';
import { useSelector } from 'react-redux';

const GoodsList = ({ title }) => {
    const { goods, totalCount, isLoading } = useSelector((s) => s.goods);

    return (
        <section className={s.goods}>
            <Container>
                <h2 className={s.title}>
                    {title !== undefined ? title : 'Новинки'}
                    {totalCount && totalCount > 0 ? <sup>&nbsp;({totalCount})</sup> : ''}
                </h2>
                {isLoading ? (
                    <Preloader />
                ) : (
                    <>
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
                        <Pagination />
                    </>
                )}
            </Container>
        </section>
    );
};

export default GoodsList;
