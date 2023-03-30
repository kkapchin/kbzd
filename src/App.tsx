import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

export default function App() {

    return (
        <div>
            APP component
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
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

