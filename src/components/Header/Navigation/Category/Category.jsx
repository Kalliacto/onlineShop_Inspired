import React from 'react';
import s from './Category.module.scss';
import { footerList } from '../../../../utils/utils';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';

const Category = () => {
    const location = useLocation()
    const gender = location.pathname.split('/')[1] || 'women';
    const categoriesList = footerList.find(el => el.link === gender)

    return (
           <ul className={s.category}>
                {categoriesList.categories.map(el => {
                    return <li key={el.link} className={s.item}>
                        <NavLink to={`${gender}/${el.link}`} className={({isActive}) => cn(s.link, isActive && s.linkActive)}>{el.title}</NavLink>
                    </li>
                })}
           </ul>
  
    );
};

export default Category;
