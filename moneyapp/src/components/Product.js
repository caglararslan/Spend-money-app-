import React from 'react'

export default function Product({product, basket, setBasket, total, money}) {
    
    const basketItem = basket.find(item => item.id === product.id)
    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        //Ürün daha önce eklenmiş
        if(checkBasket) {
            checkBasket.amount+=1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }
    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWihoutCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount-=1
            if(currentBasket.amount === 0) {
                setBasket([...basketWihoutCurrent])
            } else {
                setBasket([...basketWihoutCurrent, currentBasket])
            }
    }
  return (
    <div className='product'>
        <div className='product-image'><img src={product.image}/></div>
        <div className='product-title'> <h5>{product.title}</h5></div>
        <div className='product-price'><h6>{product.price} $</h6></div>
        <span className='amount'>{basketItem && basketItem.amount || 0}</span>
        <div className='actions'>
            <button className='add-to-cart' disabled={total+product.price > money} onClick={addBasket}>Satın Al</button>
            <button className='remove-cart' disabled={!basketItem} onClick={removeBasket}>Sat</button>
        </div>
    </div>
  )
}
