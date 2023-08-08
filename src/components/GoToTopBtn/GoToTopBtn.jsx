import React from 'react';
import s from './GoPoTopBtn.module.scss';
import cn from 'classnames';
import { ReactComponent as BtnToUp } from '../../assets/img/upArrow.svg';
import { scrollToTop } from '../../utils/utils';

const GoToTopBtn = ({ top }) => {
    return (
        <>
            <button className={cn(s.goTop, top && s.goTop_show)} onClick={scrollToTop}>
                <BtnToUp />
            </button>
        </>
    );
};

export default GoToTopBtn;
