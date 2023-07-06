import React from 'react';
import s from './Gender.module.scss';
import { genderList } from '../../../../utils/utils';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';

const Gender = (props) => {
    const location = useLocation()
    const gender = location.pathname.split('/')[1] || 'women';


    return (
        <ul className={s.gender}>
            {genderList.map((el) => {
                return (
                    <li className={s.item} key={el.link}>
                        <NavLink
                            to={el.link}
                            className={({ isActive }) => cn(s.link, (isActive || gender === el.link) && s.linkActive)}
                        >
                            {el.title}
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
};

export default Gender;
