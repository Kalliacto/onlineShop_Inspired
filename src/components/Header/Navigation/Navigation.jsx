import React, { useEffect } from 'react';
import Gender from './Gender/Gender';
import Category from './Category/Category';
import Container from '../../Layout/Container/Container';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setActiveGender } from '../../../store/slices/navigationSlices';

const Navigation = () => {
    const { category, gender } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        // проверка на gender undefined потому как переходя на ссылку /product
        //мы не имеем gender в пути а поэтому у нас туда будет диспатчится undefined
        // из за этого у нас не будет прорисовываться подкатегории в navigation/category
        // если по умолчанию мы будем использовать women то у нас при переходе в product
        // будут всегда отображаться подкатегория женское, поэтому нам нужно оставить значение
        // в стэйте до перехода по другому пути
        if (gender) {
            dispatch(setActiveGender(gender));
        }
    }, [dispatch, gender]);

    return (
        <nav>
            <Container>
                <Gender gender={gender} />
                <Category category={category} />
            </Container>
        </nav>
    );
};

export default Navigation;
