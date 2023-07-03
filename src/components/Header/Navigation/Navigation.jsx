import React from 'react';
import Gender from './Gender/Gender';
import Category from './Category/Category';

const Navigation = () => {
    return (
        <nav>
            <div className='container'>
                <Gender />
                <Category />
            </div>
        </nav>
    );
};

export default Navigation;
