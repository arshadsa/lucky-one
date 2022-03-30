import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'


const Product = ({product, handleAddtoCart}) => {
  const {name, img, price} = product;
  return (
    <div className='product'>
      <img src={img} alt=""></img>
      <div className='product-text'>
        <p>Name: <strong>{name}</strong></p>
        <p>Price: {price}</p>
      </div>
      <button onClick={() => handleAddtoCart(product)}
      className='btn-cart'>
        <p className='btn-text'>Add to Cart <FontAwesomeIcon icon={faCartArrowDown} /></p>
      </button>
    </div>
  );
};

export default Product;