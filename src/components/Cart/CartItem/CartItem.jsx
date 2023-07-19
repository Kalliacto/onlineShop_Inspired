import React from 'react';
import s from './CartItem.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../../utils/api';
import cn from 'classnames';
import { addToCart, removeFromCart } from '../../../store/slices/cartSlice';
import Count from '../../Count/Count';
import { ReactComponent as Close } from '../../../assets/img/Close.svg';

const CartItem = ({ id, color, size, count, price, goodsList }) => {
    const dispatch = useDispatch();
    const { colorList } = useSelector((s) => s.colors);
    const item = goodsList.find((el) => el.id === id);

    const changeCount = (count) => {
        if (count === 0) {
            return;
        }
        dispatch(addToCart({ id, color, size, count }));
    };

    return (
        <article className={s.item}>
            <img src={`${API_URL}/${item?.pic}`} alt={item?.title} className={s.image} />
            <div className={s.content}>
                <h3 className={s.title}>{item?.title}</h3>
                <p className={s.price}>руб {item?.price} </p>
                <div className={s.vendorCode}>
                    <span className={s.subtitle}>Артикул</span>
                    <span>{item?.id}</span>
                </div>
                <div className={s.prop}>
                    <div className={s.color}>
                        <p className={cn(s.subtitle, s.colorTitle)}>Цвет</p>
                        <div
                            className={s.colorItem}
                            style={{
                                '--data-color': colorList?.find((el) => el.title === color)?.code,
                            }}
                        ></div>
                    </div>
                    <div className={s.size}>
                        <p className={cn(s.subtitle, s.sizeTitle)}>Размер</p>
                        <div className={s.sizeItem}>{size}</div>
                    </div>
                </div>
            </div>
            <button
                onClick={() => dispatch(removeFromCart({ id, color, size, count }))}
                className={s.del}
                aria-label='Удалить товар из корзины'
            >
                <Close />
            </button>
            <Count
                className={s.count}
                count={count}
                handleIncrement={() => changeCount(count + 1)}
                handleDecrement={() => changeCount(count - 1)}
            />
        </article>
    );
};

export default CartItem;
