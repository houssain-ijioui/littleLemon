import React from 'react';
import './primaryButton.css';

export default function PrimaryButton({ text, type, onClick }) {
  return (
    <button onClick={onClick} className='primary-button' type={type}>{text}</button>
  )
}
