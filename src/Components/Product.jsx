import React from 'react';
import './load.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { removeFromDb } from '../fakedb';
const Product = (props) => {
    const {id, img, name, price, ratings, seller}=props.product
    const addToCart=props.addToCart
    return (
            <div className='load'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Manufacturer:{seller}</p>
                <p>Rating: {ratings}star</p>
                <button onClick={()=>addToCart(props.product)}className='btn-cart'>Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
    );
};

export default Product;