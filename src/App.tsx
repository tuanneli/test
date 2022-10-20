import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Input from "./components/input/Input";
import Button from "./components/button/Button";

function App() {
    return (
        <div className="App">
            <div className={'block'}>
                <a href="#" className={'link'}>Google</a>
                <div className={'block__text'}>
                    Here we write <span>Something</span>
                </div>
            </div>
            <Button text={"Click me"}/>
            <Input/>
        </div>
    );
}

export default App;
