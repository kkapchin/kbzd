import React from "react";
import s from "./Star.module.css";

type StarType = {
    value: number,
    isSelected: boolean
    onChange: (rating: number) => void
}

export default function Star({isSelected, value, onChange}: StarType) {

    const onClickHandler = () => {
        onChange(value);
    }

    return (
        <span className={s.star}
            onClick={onClickHandler}
        >
            {isSelected ? '★' : '☆'}
        </span>
    );
}