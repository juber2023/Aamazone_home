import React from 'react';
import { removeFromDb } from '../fakedb';
import './load.css'
const Cart = ({cart}) => {
    console.log(cart)
    // const totalPrice=cart.reduce((a,b)=>a+b.price,0)
    // const totalShipping=cart.reduce((a,b)=>a+b.shipping,0)
    let totalPrice=0
    let totalShipping=0
    let quantity=0

    for(const product of cart){
        totalPrice= totalPrice+product.price*product.quantity
        totalShipping= totalShipping+ product.shipping*product.quantity
        quantity=quantity+product.quantity
        if(product.quantity===0){
             product.quantity=1
        }
    }
    
    // const quantity=cart.reduce((a,b)=>a+b.quantity,0)
    const tax=totalPrice*7/100
    const grandTotal=totalPrice+totalShipping+tax

     
    return (
        <div style={{backgroundColor:'antiquewhite'}}>
        <div className='result'>
           <h1 style={{textAlign:'center'}}>Order Summary</h1>
           <p>Selected items:{quantity}</p>
           <p>Total price: ${totalPrice}</p>
           <p>Total shipping charge: ${totalShipping}</p>
           <p>Tax: ${tax.toFixed(2)}</p>
           <p>Grand total: ${grandTotal.toFixed(2)}</p>
           {/* <button onClick={()=>removeFromDb(id)}>Clear Cart</button> */}
  
        </div>
        </div>
    );
};

export default Cart;