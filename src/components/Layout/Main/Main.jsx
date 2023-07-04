import React from 'react';
import s from './Main.module.scss';

const Main = ({ children }) => {
    return <div className={s.main}>{children}</div>;
};

export default Main;
