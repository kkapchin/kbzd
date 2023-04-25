import React, {useState} from 'react';
import ToggleSwitch from "./ToggleSwitch";

export default {
    title: 'OnOff',
    component: ToggleSwitch,
}

export const SwitchedOn = () => {
    return (
        <ToggleSwitch isOn={true} setIsOn={x=>x}/>
    );
};

export const SwitchedOff = () => {
    return (
        <ToggleSwitch isOn={false} setIsOn={x=>x}/>
    );
};

export const OnOff = () => {
    const [mode, setMode] = useState(true);
    return (
        <ToggleSwitch isOn={mode} setIsOn={() => setMode(!mode)}/>
    );
};
