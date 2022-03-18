import React from 'react'
import Basketitem from './Basketitem'

export default function Basket({basket, products, total}) {
  return (
    <>
        {
        basket.map(item => (
            <Basketitem item={item} product={products.find(p=> p.id === item.id)} />
        ))
        }
        <div className='total-price'>Toplam: ${total}</div>
    </>
  )
}
