import React, { useEffect, useState } from 'react';
import s from './Banner.module.scss';
import Container from '../Layout/Container/Container';
import { NavLink, useParams } from 'react-router-dom';
import { API_URL } from '../../utils/api';
import { useMedia } from 'react-use';

const Banner = ({ bannerData }) => {
    const [img, setImg] = useState('');
    const isMobile = useMedia('(max-width: 540px)');
    const isTablet = useMedia('(max-width: 768px)');
    const isLaptop = useMedia('(max-width: 1024px)');
    const { gender, category } = useParams();

    useEffect(() => {
        if (isMobile) {
            setImg(bannerData?.bg.mobile);
        } else if (isTablet) {
            setImg(bannerData?.bg.tablet);
        } else if (isLaptop) {
            setImg(bannerData?.bg.laptop);
        } else {
            setImg(bannerData?.bg.desktop);
        }
    }, [isMobile, isTablet, isLaptop, gender, []]);

    return (
        <>
            {bannerData?.id && !category && (
                <section className={s.banner} style={{ backgroundImage: `url(${API_URL}/${img})` }}>
                    <Container>
                        <div className={s.content}>
                            <h2 className={s.title}>{bannerData.description}</h2>
                            <NavLink className={s.link} to={`/product/${bannerData.id}`}>
                                Перейти
                            </NavLink>
                        </div>
                    </Container>
                </section>
            )}
        </>
    );
};

export default Banner;
