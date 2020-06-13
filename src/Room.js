import React, { useState } from 'react';
import './Room.css';

function Room() {
    let [isLit, setLit] = useState(true)
    let [isTemp, setTemp] = useState(72)
    return (
        <div className={`room ${isLit ? "lit" : "dark"}`}>
            This is Showing the color {isLit ? "lit" : "dark"}
            <br />
            Temperature is {isLit ? `${isTemp}` : "empty"}
            <br />
            <button onClick={() => { setLit(true) }}>Lit</button>
            <br />
            <button onClick={() => { setLit(false) }}>Dark</button>
            <br />

            <button onClick={() => { setTemp(++isTemp) }}>+</button>
            <br />
            <button onClick={() => { setTemp(--isTemp) }}>-</button>
        </div>
    );
}

export default Room;
