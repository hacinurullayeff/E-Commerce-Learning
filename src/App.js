import './App.css';

// Hooks
import {useState, useEffect} from 'react'

// Components
import Header from './components/Header';
import Basket from './components/Basket';
import BasketItem from './components/BasketItem';
import Product from './components/Product'

// Json
import Products from './products.json'

function App() {

  const [money, setMoney] = useState(2000000)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)


  return (
    <>
    {/* Props anlayışı*/}
    <Header total={total} money={money}/>
    {Products.map(product => (
      <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product}/>
    ))}
    </>
  );
}

export default App;
