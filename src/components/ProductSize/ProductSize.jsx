import React from 'react';
import s from './ProductSize.module.scss';

const ProductSize = ({ size, selectedSize, handleSizeChange }) => {
    return (
        <div className={s.size}>
            <p className={s.title}>Размер</p>
            <div className={s.list}>
                {size?.map((el) => {
                    return (
                        <label key={el} className={s.item}>
                            <input
                                type='radio'
                                className={s.input}
                                name='size'
                                value={el}
                                defaultChecked={selectedSize === el}
                                onClick={handleSizeChange}
                            />
                            <span className={s.check}>{el}</span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductSize;
