import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory, getGender } from '../../store/slices/goodsSlice';
import { useParams } from 'react-router-dom';
import GoodsList from '../../components/GoodsList/GoodsList';
import Banner from '../../components/Banner/Banner';
import { usePageFromSearchParams } from '../../hooks/usePageFromSearchParams';

const MainPage = () => {
    const { category, gender = 'women' } = useParams();
    const dispatch = useDispatch();
    const { activeGender, categories } = useSelector((s) => s.navigation);
    const genderData = categories[activeGender];
    const categoryData = genderData?.list?.find((el) => el.slug === category);
    const page = usePageFromSearchParams(dispatch);
    const [title, setTitle] = useState('НОВИНКИ');

    useEffect(() => {
        if (gender && category) {
            const param = { gender, category };
            if (page) {
                param.page = page;
            }
            dispatch(getCategory(param));
            setTitle(categories[gender]?.list.find((e) => e.slug === category).title);
            return () => {};
        }
        if (gender) {
            dispatch(getGender(gender));
            setTitle('НОВИНКИ');
            return () => {};
        }
    }, [dispatch, category, gender, page]);

    return (
        <>
            {!categoryData && <Banner bannerData={genderData?.banner} />}
            <GoodsList title={title} />
        </>
    );
};

export default MainPage;
