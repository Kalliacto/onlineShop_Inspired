import React from 'react';
import Gender from './Gender/Gender';
import Category from './Category/Category';
import Container from '../../Layout/Container/Container';

const Navigation = () => {
    return (
        <nav>
            <Container>
                <Gender />
                <Category />
            </Container>
        </nav>
    );
};

export default Navigation;
