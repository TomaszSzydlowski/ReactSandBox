import {FC, useState} from "react";

export const Counter: FC = () => {
    const [counterValue, setCounterValue] = useState(0);
    const [inputValue, setInputValue] = useState(1);
    return (
        <div>
            <h3 data-testid={"header"}>My counter</h3>
            <h2 data-testid={"counter"}>{counterValue}</h2>
            <button data-testid={"minus-btn"}>-</button>
            <input data-testid={"input"} type={"number"} value={inputValue}/>
            <button data-testid={"add-btn"}>+</button>
        </div>
    )
}