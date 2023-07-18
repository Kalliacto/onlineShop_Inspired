import React from 'react';
import s from './CartItem.module.scss';

const CartItem = ({ goodsList }) => {
    console.log(goodsList);
    return (
        <div>
            <div>{goodsList.title}</div>
        </div>
    );
};

export default CartItem;
