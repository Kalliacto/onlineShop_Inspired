import React from 'react';
import s from './Category.module.scss';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useSelector } from 'react-redux';

const Category = () => {
    const { activeGender, categories } = useSelector((s) => s.navigation);

    return (
        <ul className={s.category}>
            {categories[activeGender]?.list?.map((el) => {
                return (
                    <li key={el.title} className={s.item}>
                        <NavLink
                            to={`/catalog/${activeGender}/${el.slug}`}
                            className={({ isActive }) => cn(s.link, isActive && s.linkActive)}
                        >
                            {el.title}
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
};

export default Category;
