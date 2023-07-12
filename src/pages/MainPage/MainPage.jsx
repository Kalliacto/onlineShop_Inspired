import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory, getGender } from '../../store/slices/goodsSlice';
import { useParams } from 'react-router-dom';
import { setActiveGender } from '../../store/slices/navigationSlices';
import GoodsList from '../../components/GoodsList/GoodsList';
import Banner from '../../components/Banner/Banner';

const MainPage = () => {
    const { category, gender } = useParams();
    const dispatch = useDispatch();
    const { activeGender, categories, genderList } = useSelector((s) => s.navigation);
    const genderData = categories[activeGender];
    const categoryData = genderData?.list?.find((el) => el.slug === category);

    useEffect(() => {
        if (gender && category) {
            dispatch(getCategory({ gender, category }));
            return () => {};
        }
        if (gender) {
            dispatch(getGender(gender));
            return;
        }
        dispatch(setActiveGender(gender));
    }, [dispatch, gender, category]);

    useEffect(() => {
        if (gender) {
            dispatch(setActiveGender(gender));
        } else if (genderList[0]) {
            dispatch(setActiveGender(genderList[0]));
            dispatch(getGender(genderList[0]));
        }
    }, [genderList, dispatch]);

    return (
        <>
            {!categoryData && <Banner bannerData={genderData?.banner} />}
            <GoodsList categoryData={categoryData} />
        </>
    );
};

export default MainPage;
