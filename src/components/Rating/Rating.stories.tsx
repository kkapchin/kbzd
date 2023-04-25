import Rating from './Rating';
import {useState} from "react";
import {DEFAULT_RATING} from "../../const";
import {action} from "@storybook/addon-actions"

export default {
    title: 'Rating',
    component: Rating,
};

export const RatingStars = () => {
    const [rating, setRating] = useState(DEFAULT_RATING)

    const callback = action('Rating changed');


    const onChangeRatingHandler = (value: number) => {
        setRating(value);
    }

    return <Rating
        rating={rating}
        onChange={onChangeRatingHandler}
        storybookCallback={callback}
    />
};
