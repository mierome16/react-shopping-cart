import React from 'react'
import { useSelector } from 'react-redux'
import MaterialIcon, {colorPalette} from 'material-icons-react';


import Item from './Item'
import Cart from './Cart'

import '../styles/shoppingitems.css'

export default function ShoppingItems() {
const productCount = useSelector(appState => appState.addedProducts.length)
const products = useSelector(appState => appState.addedProducts)
const quantities = products.reduce((a,b) => {
  return a + b.quantity
}, 0)

  return (
    <div className="container">
      <header>

      </header>
      <div className="page">
      <div className="itemscontainer">
        <ul className="itemlist">
          <Item></Item>
        </ul>
      </div>
      {/* <div className="cart">
        <header>
          <MaterialIcon id="shopicon"icon="shopping_cart" />
          <div className="cartcount">{quantities}</div>
          <h1>Cart</h1>
        </header> */}
        
    <Cart></Cart>
        {/* <footer>
          <p>SUBTOTAL</p>
          <h2 className="stprice">${products.reduce((a,b) => {
            return a + b.totalPrice
          },0).toFixed(2)}</h2>

          <button className="checkoutbutton">CHECKOUT</button>
        </footer>
      </div>  */}
      </div>
    </div>
  )
}
