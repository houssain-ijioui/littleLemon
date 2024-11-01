import React from 'react';
import './question.css';

export default function Question({ question, answer }) {
  return (
    <article className='question-card'>
        <h2>{question}</h2>
        <h3>{answer}</h3>
    </article>
  )
}
