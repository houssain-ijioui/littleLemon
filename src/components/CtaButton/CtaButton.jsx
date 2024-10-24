import React from 'react';
import './CtaButton.css';
import { Link } from 'react-router-dom';

export default function CtaButton({ text }) {
  return (
    <Link className='cta-button' to={'/booking'}>{text}</Link>
  )
}
