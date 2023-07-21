import React from 'react';
import s from './OrderForm.module.scss';
import Container from '../../Layout/Container/Container';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { PatternFormat } from 'react-number-format';
import * as Yup from 'yup';

const OrderForm = ({ cartItems, goodsList }) => {
    const handleSubmitOrder = (values) => {
        console.log({ values });
    };

    const validationSchema = Yup.object({
        fio: Yup.string().required('Заполните ФИО'),
        address: Yup.string().required('Заполните адрес'),
        phone: Yup.string()
            .required('Заполните номер телефона')
            .matches(/^\+\d{1}\(\d{3}\)\-\d{3}\-\d{4}$/, 'Неккоректный формат номера телефона'),
        email: Yup.string().email('Неккоректный формат email').required('Заполните Email'),
        delivery: Yup.string().required('Выберите способ доставки'),
    });

    return (
        <section>
            <Container>
                <h2 className={s.title}>Оформление заказа</h2>
                <Formik
                    initialValues={{
                        fio: '',
                        address: '',
                        phone: '',
                        email: '',
                        delivery: '',
                    }}
                    onSubmit={handleSubmitOrder}
                    validationSchema={validationSchema}
                >
                    <Form className={s.form}>
                        <fieldset className={s.personal}>
                            <label className={s.label}>
                                <Field
                                    className={s.input}
                                    type='text'
                                    placeholder='ФИО*'
                                    name='fio'
                                />
                                <ErrorMessage className={s.error} name='fio' component={'span'} />
                            </label>
                            <label className={s.label}>
                                <Field
                                    className={s.input}
                                    type='text'
                                    placeholder='Адрес доставки'
                                    name='address'
                                />
                                <ErrorMessage
                                    className={s.error}
                                    name='address'
                                    component={'span'}
                                />
                            </label>
                            <label className={s.label}>
                                <Field
                                    as={PatternFormat}
                                    className={s.input}
                                    format='+7(###)-###-####'
                                    mask=''
                                    placeholder='Телефон*'
                                    name='phone'
                                />
                                <ErrorMessage className={s.error} name='phone' component={'span'} />
                            </label>
                            <label className={s.label}>
                                <Field
                                    className={s.input}
                                    type='email'
                                    placeholder='Email*'
                                    name='email'
                                />
                                <ErrorMessage className={s.error} name='email' component={'span'} />
                            </label>
                        </fieldset>
                        <fieldset className={s.radioList}>
                            <label className={s.radio}>
                                <Field
                                    className={s.radioInput}
                                    type='radio'
                                    name='delivery'
                                    value='delivery'
                                />
                                <span>Доставка</span>
                            </label>
                            <label className={s.radio}>
                                <Field
                                    className={s.radioInput}
                                    type='radio'
                                    name='delivery'
                                    value='self'
                                />
                                <span>Самовывоз</span>
                            </label>
                            <ErrorMessage className={s.error} name='delivery' component={'span'} />
                        </fieldset>
                        <button className={s.submit} type='submit'>
                            Оформить
                        </button>
                    </Form>
                </Formik>
            </Container>
        </section>
    );
};

export default OrderForm;