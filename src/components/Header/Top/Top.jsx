import React from 'react';
import Container from '../../Layout/Container/Container';
import s from './Top.module.scss';
import cn from 'classnames';
import logo from '/src/assets/img/logo.svg';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as Like } from '../../../assets/img/Heart.svg';
import { ReactComponent as Cart } from '../../../assets/img/Cart.svg';
import { ReactComponent as Search } from '../../../assets/img/Search.svg';

const Top = ({ setOpenSearch }) => {
    const { countItems } = useSelector((s) => s.cart);
    const { countFavorite } = useSelector((s) => s.favorite);

    return (
        <div className={s.top}>
            <Container className={s.topContainer}>
                <a className={cn(s.topLink, s.topPhone)} href='tel: 89304902620'>
                    8 930 490 26 20
                </a>
                <NavLink className={s.topLogo} to={'/'}>
                    {/* <img src={logo} alt='logo' onClick={dispatch(setActiveGender('women'))} /> */}
                    <img src={logo} alt='logo' />
                </NavLink>
                <div className={s.topNavigation}>
                    <ul className={s.topNavList}>
                        <li className={s.topNavItem}>
                            <button
                                onClick={() => setOpenSearch((state) => !state)}
                                className={s.topLink}
                            >
                                <Search />
                            </button>
                        </li>
                        <li className={s.topNavItem}>
                            <NavLink to={'/cart'} className={s.topLink}>
                                <Cart />
                                <span className={s.topLinkCount}>{countItems}</span>
                            </NavLink>
                        </li>
                        <li className={s.topNavItem}>
                            <NavLink to={'/favorite'} className={cn(s.topLink, s.like)}>
                                <Like />
                                <span className={s.topLinkCount}>{countFavorite}</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default Top;
