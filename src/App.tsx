import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

export default function App() {

    return (
        <div>
            APP component
            <Rating />
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

