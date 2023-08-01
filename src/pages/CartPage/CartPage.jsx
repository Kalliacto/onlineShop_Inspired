import React, { useEffect, useState } from 'react';
import OrderForm from '../../components/Cart/OrderForm/OrderForm';
import Cart from '../../components/Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../store/slices/goodsSlice';
import ModalOrder from '../../components/Cart/ModalOrder/ModalOrder';

const CartPage = () => {
    const { cartItems, countItems, orderStatus } = useSelector((s) => s.cart);
    const { goods: goodsList } = useSelector((s) => s.goods);
    const dispatch = useDispatch();
    const [count, setCount] = useState(countItems);

    useEffect(() => {
        if (count === countItems) {
            dispatch(getAll({ list: cartItems.map((el) => el.id) }));
            setCount(countItems);
        }
    }, [countItems, dispatch, count]);

    return (
        <div>
            <Cart cartItems={cartItems} goodsList={goodsList} />
            {goodsList.length ? <OrderForm cartItems={cartItems} goodsList={goodsList} /> : ''}
            {orderStatus === 'success' && <ModalOrder />}
        </div>
    );
};

export default CartPage;
