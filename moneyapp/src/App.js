import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import products from './products.json';
import Product from './components/Product';
import Basket from './components/Basket';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function App() {
  const [money, setMoney] = useState(1000000)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)
  const triggerMode= false

  const triggerBtn = () => {
     triggerMode = true
     console.log(triggerMode)
  }

  useEffect ( () => {
    setTotal(
        basket.reduce((acc,item) => {
        return acc + (item.amount * (products.find(product => product.id === item.id).price))
        },0)
    )
  },[basket])
  return (
    <div className="App">
      <Header total={total} money = {money}/>
      <div className='container products'> 
      {
        products.map(product => (
          <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product}/>
        ))
      }
      </div>
      <Popup trigger={<button className='show-bill'> Faturayı Gör</button>} position="center">
          <div><Basket total={total} products={products} basket={basket}/></div>
      </Popup>
    </div>
  );
}

export default App;
