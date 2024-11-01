import React from "react";
import './service.css';


export default function Service({ imageUrl, title, text }) {
  return (
    <article className="service">
      <img src={imageUrl} />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}
