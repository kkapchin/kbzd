import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import {useState} from "react";
import {DEFAULT_RATING} from "./const";

export default function App() {
    const [rating, setRating] = useState(DEFAULT_RATING);
    const onRatingChangeHandler = (value: number) => setRating(value);

    return (
        <div>
            APP component
            <Rating rating={rating} onChange={onRatingChangeHandler}/>
            <Accordion
                title={'Menu'}
            />
            <Accordion
                title={'Contacts'}
            />
            <Accordion
                title={'News'}
            />

            {/*<ToggleSwitch isOn={isOn} setIsOn={setIsOn}/>*/}

        </div>
    );
}

