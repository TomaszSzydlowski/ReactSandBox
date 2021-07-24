import React, {FC} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";

const App: FC = () => {
    return (
        <div className="App">
            <Counter/>
        </div>
    );
}

export default App;
