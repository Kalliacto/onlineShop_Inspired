import React from 'react';
import s from './Gender.module.scss';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useSelector } from 'react-redux';

const Gender = () => {
    const { activeGender, genderList, categories} = useSelector(s => s.navigation);

    return (
        <ul className={s.gender}>
            {genderList.map((gender) => {
                return (
                    <li className={s.item} key={gender}>
                        <NavLink
                            to={gender}
                            className={({ isActive }) => cn(s.link, (isActive || gender === activeGender) && s.linkActive)}
                        >
                            {categories[gender].title}
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
};

export default Gender;
