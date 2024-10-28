import React from 'react';
import '../ctaButton/ctaButton.css';


export default function PrimaryButton({ text, type }) {
  return (
    <button className='primary-button' type={type}>{text}</button>
  )
}
