import React, { useEffect } from 'react';
import s from './Main.module.scss';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const Main = ({ children }) => {
    const { status } = useSelector((s) => s.statusServer);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!status && location.pathname !== '/404') {
            navigate('/404');
        }
    }, [navigate, status, location]);

    return <div className={s.main}>{children}</div>;
};

export default Main;
