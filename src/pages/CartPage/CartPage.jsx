import React from 'react';
import OrderForm from '../../components/OrderForm/OrderForm';
import Cart from '../../components/CartItem/Cart';

const CartPage = (props) => {
    return (
        <div>
            <Cart />
            <OrderForm />
        </div>
    );
};

export default CartPage;
