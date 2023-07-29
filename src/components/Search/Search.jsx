import React from 'react';
import s from './Search.module.scss';
import Container from '../Layout/Container/Container';

const Search = ({ openSearch }) => {
    return (
        <>
            {openSearch && (
                <div className={s.search}>
                    <Container>
                        <form className={s.form}>
                            <input
                                className={s.input}
                                type='search'
                                name='search'
                                placeholder='Найти...'
                            />
                            <button className={s.btn} type='submit'>
                                {' '}
                                Искать
                            </button>
                        </form>
                    </Container>
                </div>
            )}
        </>
    );
};

export default Search;
