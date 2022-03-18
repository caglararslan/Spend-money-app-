import React from 'react'
import { moneyFormat } from '../Helpers'

export default function Header({money,total}) {
  return (
    <div className='header'>
        <div className='total-money'>Toplam Para: $ {moneyFormat(money-total)} </div>
    </div>
  )
}
