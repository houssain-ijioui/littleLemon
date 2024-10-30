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
            <input id="party-size" type="number" value={partySize} readOnly />
            <button onClick={() => dispatch(decreasePS())} type='button'>-</button>
        </div>
    )
}
