import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";
import {useState} from "react";

// export enum Toggle {
//         ON = 'ON',
//         OFF = 'OFF',
// }

export default function App() {
        const [isOn, setIsOn] = useState<boolean>(true);
    return (
        <div>
            APP component
            <Accordion
                title={'Menu'}
                isCollapsed={true}
            />
            <Accordion
                title={'Contacts'}
                isCollapsed={false}
            />
            <Accordion
                title={'News'}
                isCollapsed={true}
            />

            <ToggleSwitch isOn={isOn} setIsOn={setIsOn}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

