import React, {useState} from "react";
import Star from "./Star/Star";

export default function Rating() {

    const [rating, setRating] = useState(0);

    const stars = new Array(5)
        .fill('')
        .map((item, index) => <Star
            value={index + 1}
            isSelected={rating > index}
            setRating={setRating}
        />);

    return (
        <div>
            {stars}
        </div>
    );
}
