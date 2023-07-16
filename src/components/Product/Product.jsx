import React from 'react';
import s from './Product.module.scss';
import { API_URL } from '../../utils/api';
import { NavLink } from 'react-router-dom';
import ColorList from '../ColorList/ColorList';
import LikeBtn from '../Likebtn/Likebtn';

const Product = (props) => {
    return (
        <article className={s.product}>
            <NavLink to={`/product/${props.id}`} className={s.link}>
                <img src={`${API_URL}/${props.pic}`} alt={props.title} className={s.image} />
                <h3 className={s.title}>{props.title}</h3>
            </NavLink>
            <div className={s.row}>
                <p className={s.price}>{props.price}&nbsp;&#8381;</p>
                <div className={s.favorite}>
                    <LikeBtn id={props.id} />
                    <ColorList colors={props.colors} />
                </div>
            </div>
        </article>
    );
};

export default Product;
