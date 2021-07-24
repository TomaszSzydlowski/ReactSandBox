import {FC, useState} from "react";
import "./Counter.css"

export const Counter: FC = () => {
    const [counterValue, setCounterValue] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    const subtractFromCounter = () => {
        setCounterValue(counterValue - inputValue)
    };

    const addFromCounter = () => {
        setCounterValue(counterValue + inputValue)
    }

    return (
        <div>
            <h3 data-testid={"header"}>My counter</h3>
            <h2 data-testid={"counter"}
                className={`${counterValue >= 100 ? "green" : ""}${counterValue <= -100 ? "red" : ""}`}>{counterValue}</h2>
            <button data-testid={"minus-btn"} onClick={subtractFromCounter}>-</button>
            <input data-testid={"input"} type={"number"} value={inputValue} className={"text-center"}
                   onChange={(e) => setInputValue(parseInt(e.target.value))}/>
            <button data-testid={"add-btn"} onClick={addFromCounter}>+</button>
        </div>
    )
} 