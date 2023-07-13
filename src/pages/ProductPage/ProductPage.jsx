import React, { useEffect, useState } from 'react';
import s from './ProductPage.module.scss';
import { useParams } from 'react-router-dom';
import Container from '../../components/Layout/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getProductInfo } from '../../store/slices/productSlice';
import { API_URL } from '../../utils/api';
import cn from 'classnames';
import ColorList from '../../components/ColorList/ColorList';
import { ReactComponent as Like } from '../../assets/img/Heart.svg';
import Count from '../../components/Count/Count';
import ProductSize from '../../components/ProductSize/ProductSize';
import GoodsList from '../../components/GoodsList/GoodsList';
import { getCategory } from '../../store/slices/goodsSlice';

const ProductPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product } = useSelector((s) => s.product);
    const [selectedColor, setSelectedColor] = useState('');
    const [count, setCount] = useState(0);
    const [selectedSize, setSelectedSize] = useState('');

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
    };

    const handleIncrement = (e) => {
        setCount((state) => state + 1);
    };

    const handleDecrement = (e) => {
        if (count <= 0) {
            return;
        }
        setCount((state) => state - 1);
    };

    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
    };

    useEffect(() => {
        dispatch(getProductInfo(id));
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(
            getCategory({
                gender: product.gender,
                category: product.category,
                count: 4,
                top: true,
                exclude: product.id,
            })
        );
    }, [dispatch, product.gender, product.category, product.id]);

    return (
        <>
            <section className={s.card}>
                <Container className={s.container}>
                    <img
                        className={s.image}
                        src={`${API_URL}/${product.pic}`}
                        alt={product.title}
                    />
                    <form className={s.content}>
                        <h2 className={s.title}>{product.title}</h2>
                        <p className={s.price}>{product.price}&nbsp;&#8381;</p>
                        <div className={s.vendorCode}>
                            <span className={s.subtitle}>Артикул</span>
                            <span className={s.id}>{product.id}</span>
                        </div>
                        <div className={s.color}>
                            <span className={cn(s.subtitle, s.colorTitle)}>Цвет</span>
                            <ColorList
                                colors={product.colors}
                                selectedColor={selectedColor}
                                handleColorChange={handleColorChange}
                            />
                        </div>
                        <ProductSize
                            size={product.size}
                            selectedSize={selectedSize}
                            handleSizeChange={handleSizeChange}
                        />
                        <div className={s.description}>
                            <p className={cn(s.subtitle, s.descriptionTitle)}>Описание</p>
                            <p className={s.descriptionText}>{product.description}</p>
                        </div>
                        <div className={s.control}>
                            <Count
                                className={s.count}
                                count={count}
                                handleIncrement={handleIncrement}
                                handleDecrement={handleDecrement}
                            />
                            <button className={s.addCart} type='submit'>
                                В корзину
                            </button>
                            <button
                                className={s.favorite}
                                aria-label='Добавить в избранное'
                                type='button'
                            >
                                <Like />
                            </button>
                        </div>
                    </form>
                </Container>
            </section>
            <GoodsList title='Вам может понравиться' />
        </>
    );
};

export default ProductPage;