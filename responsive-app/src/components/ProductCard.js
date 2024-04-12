import React from 'react'

export default function ProductCard({title, imageUrl, price}) {
  return (
    <div>
        <img src={imageUrl} alt={title} />
        <p>{title}</p>
        <p>{price}</p>
    </div>
  )
}
