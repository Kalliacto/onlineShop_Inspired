import React, { useEffect, useRef } from 'react';
import s from './ErrorPage.module.scss';
import { useLocation, useNavigate, useRouteError } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getColors } from '../../store/slices/colorSlice';
import { getCategories } from '../../store/slices/navigationSlices';

const ErrorPage = (props) => {
    const routeError = useRouteError();
    const { status } = useSelector((s) => s.statusServer);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const timerIdRef = useRef(null);

    useEffect(() => {
        if (status && location.pathname === '/404') {
            navigate('/');
        }

        if (!status && location.pathname === '/404') {
            clearInterval(timerIdRef.current);

            timerIdRef.current = setInterval(() => {
                dispatch(getColors());
                dispatch(getCategories());
            }, 3000);
        }

        // Доступ после размонтирования
        return () => {
            clearInterval(timerIdRef.current);
        };
    }, [navigate, status, location, dispatch]);

    return (
        <div className={s.error}>
            <h2 className={s.title}>Произошла ошибка, попробуйте зайти позже</h2>
            <p className={s.message}>{routeError?.message ?? 'Неизвестная ошибка'}</p>
        </div>
    );
};

export default ErrorPage;
