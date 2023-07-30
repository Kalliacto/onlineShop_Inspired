import React from 'react';
import s from './Search.module.scss';
import Container from '../Layout/Container/Container';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const Search = ({ openSearch, setOpenSearch }) => {
    const initialValues = {
        search: '',
    };

    const validationSchema = Yup.object({
        search: Yup.string().required('Поле обязательно для заполнения'),
    });

    const navigate = useNavigate();

    const handleSubmit = ({ search }, { resetForm }) => {
        if (search.trim()) {
            navigate(`/search?q=${search.trim()}`);
            resetForm();
            setOpenSearch((state) => !state);
        }
    };

    return (
        <>
            {openSearch && (
                <div className={s.search}>
                    <Container>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            <Form className={s.form}>
                                <Field
                                    className={s.input}
                                    type='search'
                                    name='search'
                                    placeholder='Найти...'
                                />
                                <ErrorMessage name='search' component={'p'} className='s.error' />
                                <button className={s.btn} type='submit'>
                                    {' '}
                                    Искать
                                </button>
                            </Form>
                        </Formik>
                    </Container>
                </div>
            )}
        </>
    );
};

export default Search;
