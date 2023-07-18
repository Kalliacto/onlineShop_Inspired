import React from 'react';
import OrderForm from '../../components/Cart/OrderForm/OrderForm';
import Cart from '../../components/Cart/Cart';

const CartPage = (props) => {
    return (
        <div>
            <Cart />
            <OrderForm />
        </div>
    );
};

export default CartPage;
