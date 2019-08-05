import React from 'react'
import { useSelector } from 'react-redux'
import { remove } from '../actions/shoppingactions';
import MaterialIcon from 'material-icons-react'

export default function Cart() {
    const product = useSelector(appState => appState.addedProducts)
    const products = useSelector(appState => appState.addedProducts)
const quantities = products.reduce((a,b) => {
    return a + b.quantity
}, 0)

    return (
        <div className="cart">
        <header>
          <MaterialIcon id="shopicon"icon="shopping_cart" />
          <div className="cartcount">{quantities}</div>
          <h1>Cart</h1>
        </header>
        <ul className="itemsincart">
            {product.map(item => (
                 <li className="itemadded">
                    <img src={`/assets/${item.sku}_2.jpg`}></img>
                    <div className="iteminfo">
                        <p className="cartname">{item.title}</p>
                        <p className="cartstyle">{item.style}</p>
                        <p className="quantity">Quantity: {item.quantity}</p>
                        <p className="cartprice">{item.currencyFormat}{item.totalPrice.toFixed(2)}</p>
                    </div>
                    <button className="deletebutton" onClick={e => remove(item.id)}><MaterialIcon icon="delete" id="trash"/></button>
                    </li>
            ))}
            </ul>
            <footer>
          <p>SUBTOTAL</p>
          <h2 className="stprice">${products.reduce((a,b) => {
            return a + b.totalPrice
          },0).toFixed(2)}</h2>

          <button className="checkoutbutton">CHECKOUT</button>
        </footer>
      </div>

    )
}
