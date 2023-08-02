import React, { useEffect, useState } from 'react';
import s from './Main.module.scss';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import GoToTopBtn from '../../GoToTopBtn/GoToTopBtn';

const Main = ({ children }) => {
    const { status } = useSelector((s) => s.statusServer);
    const location = useLocation();
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!status && location.pathname !== '/404') {
            navigate('/404');
        }
    }, [navigate, status, location]);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200) {
            setVisible(true);
        } else if (scrolled <= 200) {
            setVisible(false);
        }
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div className={s.main}>
            {children}
            <GoToTopBtn top={visible} />
        </div>
    );
};

export default Main;
