import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart, emptyCart, removeItem}) => {

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }
  const chooseOne = () => {
    alert('You can buy ' + cart[getRandomInt(cart.length)].name + '!');
  }
  return (
    <div className='cart'>
      <h3>Selected Items</h3>
      {
        cart.map((item) =>
          <div className='cartItem' key={item.id}>
            <img src={item.img} alt=""></img>
            <p>{item.name}</p>
            <button className='btn-trash' onClick={() => removeItem(item)}><FontAwesomeIcon icon={faTrash}/></button>
          </div>
      )}
      <br/><br/>
      <div className='btn-group'>
        <button onClick={chooseOne}>Choose 1 for me</button>
        <button onClick={emptyCart}>Choose again</button>
      </div>
    </div>
  );
};

export default Cart;