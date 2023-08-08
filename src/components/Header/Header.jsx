import React, { useState } from 'react';
import Top from './Top/Top';
import Navigation from './Navigation/Navigation';
import s from './Header.module.scss';
import Search from '../Search/Search';

const Header = () => {
    const [openSearch, setOpenSearch] = useState(false);
    return (
        <header className={s.header}>
            <Top setOpenSearch={setOpenSearch} />
            <Search openSearch={openSearch} setOpenSearch={setOpenSearch} />
            <Navigation />
        </header>
    );
};

export default Header;
