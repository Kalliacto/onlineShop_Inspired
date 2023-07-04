import React from 'react';
import s from './Category.module.scss';
import { CategoryList } from '../../../../utils/utils';

const Category = () => {
    return (
        <div>
            <p>Category {console.log(CategoryList.title)}</p>
        </div>
    );
};

export default Category;
