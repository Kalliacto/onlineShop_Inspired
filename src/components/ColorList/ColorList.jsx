import React from 'react';
import s from './ColorList.module.scss';
import { useSelector } from 'react-redux';
import Color from './Color/Color';

const ColorList = ({ colors }) => {
    const { colorList } = useSelector((s) => s.colors);

    return (
        <ul className={s.colorList}>
            {colors?.map((id, i) => {
                const color = colorList.find((item) => id === item.id);
                return <Color key={id} color={color?.code} check={!i} />;
            })}
        </ul>
    );
};

export default ColorList;
