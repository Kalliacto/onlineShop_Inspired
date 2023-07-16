import { NavLink, useLocation } from 'react-router-dom';
import s from './Pagintaion.module.scss';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

const Pagination = (props) => {
    const pathname = useLocation().pathname;
    const { page, pages } = useSelector((s) => s.goods);
    const [pagePagination, setPagePagination] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        setPagePagination(page);
    }, [page]);

    const handlePageChange = (newPage) => {
        setPagePagination(newPage);
    };

    const handlePrevPage = () => {
        if (pagePagination > 1) {
            handlePageChange(pagePagination - 1);
        }
    };

    const handleNextPage = () => {
        if (pagePagination < pages) {
            handlePageChange(pagePagination + 1);
        }
    };

    const renderPaginationItems = () => {
        const paginationItems = [];

        let startPage = Math.max(
            1,
            +pagePagination === pages ? pagePagination - 2 : pagePagination - 1
        );
        let endPage = Math.min(startPage + 2, pages);
        for (let i = startPage; i <= endPage; i++) {
            paginationItems.push(
                <li key={i}>
                    <NavLink
                        to={`${pathname}?page=${i}`}
                        className={cn(s.link, i === +page && s.linkActive)}
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </NavLink>
                </li>
            );
        }
        return paginationItems;
    };

    return (
        <div className={s.pagination}>
            <button className={s.arrow} onClick={handlePrevPage} disabled={pagePagination <= 2}>
                &lt;
            </button>
            <ul className={s.list}>{renderPaginationItems()}</ul>
            <button
                className={s.arrow}
                onClick={handleNextPage}
                disabled={pagePagination >= pages - 1 || pages <= 3}
            >
                &gt;
            </button>
        </div>
    );
};

export default Pagination;
