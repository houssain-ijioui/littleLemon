import React from "react"
import { Rating } from "@mui/material"
import "./testimony.css"

export default function Testimony({ value, opinion, name, imageUrl }) {
  return (
    <article className='testimony-card'>
      <img src={imageUrl} />
      <Rating value={value} precision={0.5} readOnly />
      <p className='opinion'>"{opinion}"</p>
      <p className='name'>- {name}</p>
    </article>
  )
}
