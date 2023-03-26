import React from "react";

type StarType = {
    isSelected: boolean
}

export default function Star({isSelected}: StarType) {
    return (
        <div>
            {isSelected ? <b>star</b> : 'star'}
        </div>
    )
}