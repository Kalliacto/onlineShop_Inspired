import React from 'react';
import s from './Category.module.scss';
import { categoryList } from '../../../../utils/utils';

const Category = () => {
    return (
        <div>
            <p>Category {console.log(categoryList.title)}</p>
        </div>
    );
};

export default Category;
