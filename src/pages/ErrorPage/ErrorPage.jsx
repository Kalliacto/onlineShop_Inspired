import React from 'react';
import s from './ErrorPage.module.scss';
import { useRouteError } from 'react-router-dom';

const ErrorPage = (props) => {
    const error = useRouteError();

    return (
        <div>
            <h2>Ошибка 404</h2>
            <p>{error?.message ?? 'Неизвестная ошибка'}</p>
        </div>
    );
};

export default ErrorPage;
