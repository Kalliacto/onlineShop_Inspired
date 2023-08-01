import React from 'react';
import s from './ModalOrder.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../../store/slices/cartSlice';
import { API_URL } from '../../../utils/api';
import { ReactComponent as Close } from '../../../assets/img/Close.svg';

const ModalOrder = () => {
    const {
        order: { values, order, id },
    } = useSelector((state) => state.cart);
    const { goods: goodsList } = useSelector((state) => state.goods);
    const dispatch = useDispatch();

    const totalPrice = order.reduce((sum, el) => {
        const product = goodsList.find((product) => product.id === el.id);
        return product && sum + product.price * el.count;
    }, 0);

    const handleCloseModal = () => {
        dispatch(clearCart());
    };

    const handleModalClick = (ev) => {
        ev.stopPropagation();
    };

    return (
        <div className={s.modal} onClick={handleCloseModal}>
            <div className={s.body} onClick={handleModalClick}>
                <h2 className={s.title}>Заказ оформлен №{id}</h2>
                <div className={s.description}>
                    <p>Спасибо за выбор нашего магазина!</p>
                    <p>Здесь вы можете посмотреть все детали вашего заказа.</p>
                </div>
                <ul className={s.customer}>
                    <li className={s.customerItem}>
                        <span className={s.customerTitle}>Получатель</span>
                        <span className={s.customerData}>{values.fio}</span>
                    </li>
                    {values.delivery === 'delivery' && (
                        <li className={s.customerItem}>
                            <span className={s.customerTitle}>Адрес доставки</span>
                            <span className={s.customerData}>{values.address}</span>
                        </li>
                    )}
                    <li className={s.customerItem}>
                        <span className={s.customerTitle}>Телефон</span>
                        <span className={s.customerData}>{values.phone}</span>
                    </li>
                    <li className={s.customerItem}>
                        <span className={s.customerTitle}>E-mail</span>
                        <span className={s.customerData}>{values.email}</span>
                    </li>
                    <li className={s.customerItem}>
                        <span className={s.customerTitle}>Способ получения</span>
                        <span className={s.customerData}>
                            {values.delivery === 'delivery' ? 'Доставка' : 'Самовывоз'}
                        </span>
                    </li>
                </ul>

                <ul className={s.goods}>
                    {order.map((item) => {
                        const product = goodsList.find((product) => product.id === item.id);
                        return (
                            <li className={s.goodsItem} key={`${item.id}${item.color}${item.size}`}>
                                <img
                                    className={s.goodsImg}
                                    src={`${API_URL}/${product.pic}`}
                                    alt={product.title}
                                />
                                <p className={s.goodsCount}>X{item.count}</p>
                            </li>
                        );
                    })}
                </ul>

                <div className={s.total}>
                    <p>Итого: </p>
                    <p>руб {totalPrice}</p>
                </div>

                <button className={s.close} onClick={handleCloseModal}>
                    <Close />
                </button>
            </div>
        </div>
    );
};

export default ModalOrder;
