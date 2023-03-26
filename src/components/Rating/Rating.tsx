import React from "react";
import Star from "./Star";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export default function Rating({ value }: RatingPropsType) {
    return (
        <div style={{display: 'flex'}}>
            <Star isSelected={ value > 0 } />
            <Star isSelected={ value > 1 } />
            <Star isSelected={ value > 2 } />
            <Star isSelected={ value > 3 } />
            <Star isSelected={ value > 4 } />
        </div>
    );
}
