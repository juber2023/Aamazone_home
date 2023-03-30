import React, { useState } from 'react';
import { removeFromDb } from '../fakedb';
import './load.css'
const Cart = ({cart}) => {
    // console.log(cart)
    let totalPrice=0
    let totalShipping=0
    let quantity=0
    let id
    

    for(const product of cart){
        totalPrice= totalPrice+product.price*product.quantity
        totalShipping= totalShipping+ product.shipping*product.quantity
        quantity=quantity+product.quantity
        if(product.quantity===0){
             product.quantity=1
        }  
        id=product.id 
    }
    
    console.log(id)

    const tax=totalPrice*7/100
    const grandTotal=totalPrice+totalShipping+tax
    let serial=1
     
    return (
        <div style={{backgroundColor:'antiquewhite'}}>
        <div className='result'>
           <h1 style={{textAlign:'center'}}>Order Summary</h1>
           <p>Selected items:{quantity}</p>
           <p>Total price: ${totalPrice}</p>
           <p>Total shipping charge: ${totalShipping}</p>
           <p>Tax: ${tax.toFixed(2)}</p>
           <p>Grand total: ${grandTotal.toFixed(2)}</p>
           <button onClick={()=>removeFromDb(id)}>Clear Cart</button>
           <hr />
           <h1 style={{textAlign:'center'}}>Cart List</h1>
           

            {
            cart.map((item, index) => (
                <p key={index}>
                {serial++}. {item.name}
                </p>
            ))
            }

        </div>
        </div>
    );
};

export default Cart;