import React from 'react';
import { useState } from 'react';
import './psButton.css';


export default function PsButton() {

    const [ size, setSize ] = useState(0);

    const increase = () => {
        setSize((prev) => {
            if (prev === 10) return 10
            else { return prev + 1 }
        })
    }

    const decrease = () => {
        setSize((prev) => {
            if (prev === 0) return 0
            else { return prev - 1 }
        })
    }

    return (
        <div className='ps-button'>
            <button onClick={increase}>+</button>
            <span>{size}</span>
            <button onClick={decrease}>-</button>
        </div>
    )
}
