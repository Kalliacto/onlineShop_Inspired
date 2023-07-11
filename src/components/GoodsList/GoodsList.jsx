import Container from '../Layout/Container/Container';
import Product from '../Product/Product';
import s from './GoodsList.module.scss';
import React from 'react';
import { useSelector } from 'react-redux';

const GoodsList = ({ category }) => {
    const { goods } = useSelector((s) => s.goods);
    const { activeGender, categories } = useSelector((s) => s.navigation);

    const title = category
        ? categories[activeGender]?.list?.find((el) => el.slug === category).title
        : 'Новинки';

    return (
        <section className={s.goods}>
            <Container>
                <h2 className={s.title}>{title}</h2>
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

export default GoodsList;
