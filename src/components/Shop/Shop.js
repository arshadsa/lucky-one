import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart,setCart]=useState([]);
  
  useEffect(()=> {
    fetch('products.JSON')
    .then(res=> res.json())
    .then(data => 
      {
        setProducts(data)
      })
  },[])

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }
  const handleAddtoCart = (selectedProduct) =>{
    let newCart = [];
    if(cart.length >= 4){
      alert('You should not add any more item!');
    } 
    else {
      const exists = cart.find(product => product.id === selectedProduct.id);
      if(!exists){
        newCart = [...cart, selectedProduct];
        setCart(newCart);
      } 
      else {
        
      }
    }
  }
  const emptyCart = () =>{
      setCart([]);
  }
  const removeItem = (selectedProduct) => {
    let newCart = cart.filter(product => product.id !== selectedProduct.id);
    setCart(newCart);
  }

  return (
    <div className='shop-container'>
        <div className='products-container'>
          {
            products.map(product => <Product
              product={product}
              key={product.id}
              handleAddtoCart = {handleAddtoCart}
              ></Product>
              )
          }
        </div>
        <div className='cart-container'>
          <Cart cart={cart} emptyCart = {emptyCart} removeItem = {removeItem} key={getRandomInt(100)}></Cart>
        </div>
    </div>
  );
};

export default Shop;