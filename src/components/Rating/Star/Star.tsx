import React from "react";
import s from "./Star.module.css";

type StarType = {
    value: number,
    isSelected: boolean
    setRating: (rating: number) => void
}

export default function Star({isSelected, value, setRating}: StarType) {

    const onClickHandler = () => {
        setRating(value);
    }

    return (
        <span className={s.star}
            onClick={onClickHandler}
        >
            {isSelected ? '★' : '☆'}
        </span>
    );
}