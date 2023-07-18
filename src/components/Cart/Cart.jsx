import React from 'react';
import s from './Cart.module.scss';
import CartItem from './CartItem/CartItem';
import Container from '../Layout/Container/Container';

const Cart = ({ cartItems, goodsList }) => {
    console.log(goodsList?.length);
    const totalPrice = 0;
    return (
        <section className={s.cart}>
            <Container>
                <h2 className={s.title}>Корзина</h2>
                {goodsList?.length ? (
                    <ul className={s.list}>
                        {cartItems.map((item) => (
                            <li key={item.id} className={s.item}>
                                <CartItem {...item} goodsList={goodsList} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <h3>В корзине пусто</h3>
                )}
                <div className={s.total}>
                    <p>Итого: руб {totalPrice}</p>
                </div>
            </Container>
        </section>
    );
};

export default Cart;
