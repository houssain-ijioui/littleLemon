import React from 'react';
import './psButton.css';
import { useDispatch, useSelector } from "react-redux";
import { increasePS, decreasePS } from '../../features/partySize/partySizeSlice';


export default function PsButton() {

    const partySize = useSelector((state) => state.partySize.partySize);
    const dispatch = useDispatch();

    return (
        <div className='ps-button'>
            <button onClick={() => dispatch(increasePS())} type='button'>+</button>
            <span>{partySize}</span>
            <button onClick={() => dispatch(decreasePS())} type='button'>-</button>
        </div>
    )
}
