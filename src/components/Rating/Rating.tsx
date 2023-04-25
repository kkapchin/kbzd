import React from "react";
import Star from "./Star/Star";

const MAX_RATING_VALUE = 5;

type PropsType = {
    rating: number
    onChange: (value: number) => void
    storybookCallback?: (value: number) => void
}

export default function Rating({ rating, onChange, ...restProps }: PropsType) {
    const ratingValues = [...new Array(MAX_RATING_VALUE).keys()].map((el) => el + 1);

    const onChangeHandler = (value: number) => {
        onChange(value);
        if(restProps.storybookCallback) {
            restProps.storybookCallback(value);
        }
    }

    const stars = ratingValues.map((value) => <Star
        key={value}
        value={value}
        isSelected={rating >= value}
        onChange={onChangeHandler}
    />);

    return (
        <div>
            {stars}
        </div>
    );
}
