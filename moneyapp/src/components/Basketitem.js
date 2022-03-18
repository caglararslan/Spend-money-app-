import React from 'react'

export default function Basketitem({item, product}) {
  return (
    <div className='basket-item'>
        {product.title} x {item.amount}
    </div>
  )
}
