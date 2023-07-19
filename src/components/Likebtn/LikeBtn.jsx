import React from 'react';
import s from './LikeBtn.module.scss';
import { ReactComponent as Like } from '../../assets/img/Heart.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../../store/slices/favoriteSlice';
import cn from 'classnames';

const LikeBtn = ({ id }) => {
    const dispatch = useDispatch();
    const { favorite: favoriteList } = useSelector((s) => s.favorite);
    const isFavorite = favoriteList.includes(id);

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            dispatch(removeFromFavorite({ id }));
        } else {
            dispatch(addToFavorite({ id }));
        }
    };

    return (
        <button
            onClick={handleFavoriteToggle}
            className={isFavorite ? cn(s.like, s.active) : s.like}
            aria-label='Добавить в избранное'
            type='button'
        >
            <Like />
        </button>
    );
};

export default LikeBtn;
