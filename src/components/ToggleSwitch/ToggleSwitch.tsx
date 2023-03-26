import s from './ToggleSwitch.module.css';
import {Dispatch, SetStateAction} from "react";

type ToggleSwitchPropsType = {
    isOn: boolean
    setIsOn: Dispatch<SetStateAction<boolean>>
}

export default function ToggleSwitch ({ isOn, setIsOn }: ToggleSwitchPropsType) {
    const onButtonClickHandler = () => {
         setIsOn(true)
    }
    const offButtonClickHandler = () => {
         setIsOn(false)
    }
    return (
        <div className={s.container}>
            <button
                className={`${s.button} ${isOn && s.active_on}`}
                onClick={onButtonClickHandler}
            >
                ON
            </button>
            <button
                className={`${s.button} ${!isOn && s.active_off}`}
                onClick={offButtonClickHandler}
            >
                OFF
            </button>
            <div className={`${s.indicator} ${isOn ? s.active_on : s.active_off}`}></div>
        </div>
    )
}