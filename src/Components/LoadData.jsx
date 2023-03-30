import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../fakedb';
import Cart from './Cart';
import './load.css'
import Product from './Product';

const LoadData = () => {
  const [products,setProducts] = useState([])
  const [cart,setCart]=useState([])
  const savedCart=[]
  useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])

  useEffect(()=>{
    const storedCart=getShoppingCart()
    // console.log(storedCart)
    for(const id in storedCart){
      const savedProducts=products.find(product=>product.id===id);
      // console.log(savedProducts)
      if(savedProducts){
        const quantity=storedCart[id]
        savedProducts.quantity=quantity
        savedCart.push(savedProducts)
      }
      

    }
    setCart(savedCart)
  },[products])

  const addToCart=(product)=>{
    const newCart=[...cart,product]
    setCart(newCart)
    addToDb(product.id)
}
  return (
    <div className='main'>
      <div className='cart-grid'>
      {
      products.map(product=>{
        // console.log(product)
       return <Product product={product} key={product.id} addToCart={addToCart}></Product>
      })
      
      }
      </div>
        <Cart cart={cart}></Cart>
    </div>
  );
};

export default LoadData;