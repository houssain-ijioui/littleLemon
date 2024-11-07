import React from 'react';
import './ctaButton.css';
import { Link } from 'react-router-dom';


export default function CtaButton({ text }) {
  return (
    <Link aria-label='Book' className='cta-button' to={'/booking'}>{text}</Link>
  )
}

