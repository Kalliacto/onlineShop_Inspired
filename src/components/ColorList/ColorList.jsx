import React from 'react';
import s from './ColorList.module.scss';
import { useSelector } from 'react-redux';
import Color from './Color/Color';
import ColorLabel from './ColorLabel/ColorLabel';

const ColorList = ({ colors, selectedColor, handleColorChange }) => {
    const { colorList } = useSelector((s) => s.colors);

    return (
        <>
            {handleColorChange ? (
                <ul className={s.colorList}>
                    {colors?.map((id, i) => {
                        const color = colorList.find((item) => id === item.id);
                        return (
                            <ColorLabel
                                key={id}
                                color={color}
                                check={!i}
                                selectedColor={selectedColor}
                                handleColorChange={handleColorChange}
                            />
                        );
                    })}
                </ul>
            ) : (
                <ul className={s.colorList}>
                    {colors?.map((id, i) => {
                        const color = colorList.find((item) => id === item.id);
                        return <Color key={id} color={color?.code} check={!i} />;
                    })}
                </ul>
            )}
        </>
    );
};

export default ColorList;
