import React from 'react';
import s from './Cart.module.scss';
import CartItem from './CartItem/CartItem';
import Container from '../Layout/Container/Container';

const Cart = ({ cartItems, goodsList }) => {
    const totalPrice = cartItems.reduce((sum, el) => {
        const product = goodsList.find((product) => product.id === el.id);
        return product && sum + product.price * el.count;
    }, 0);

    return (
        <section className={s.cart}>
            <Container>
                <h2 className={s.title}>Корзина</h2>
                {cartItems?.length ? (
                    <ul className={s.list}>
                        {cartItems.map((item) => (
                            <li key={item.id + item.color + item.size} className={s.item}>
                                <CartItem {...item} goodsList={goodsList} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <h3 className={s.empty}>В корзине пусто</h3>
                )}
                <div className={s.total}>
                    <p>Итого: руб {totalPrice}</p>
                </div>
            </Container>
        </section>
    );
};

export default Cart;
