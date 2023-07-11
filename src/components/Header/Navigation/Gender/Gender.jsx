import React, { useEffect } from 'react';
import s from './Gender.module.scss';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveGender } from '../../../../store/slices/navigationSlices';

const Gender = ({ gender }) => {
    const { activeGender, genderList, categories } = useSelector((s) => s.navigation);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActiveGender(gender));
    }, [dispatch, gender]);

    return (
        <ul className={s.gender}>
            {genderList.map((gender) => {
                return (
                    <li className={s.item} key={gender}>
                        <NavLink
                            to={`/catalog/${gender}`}
                            className={({ isActive }) =>
                                cn(s.link, (isActive || gender === activeGender) && s.linkActive)
                            }
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
