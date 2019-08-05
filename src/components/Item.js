import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { getProducts, addProduct } from '../actions/shoppingactions'

export default function Item() {
const products = useSelector(appState => appState.products)

useEffect(() => {
    getProducts()
}, [])
    console.log(products)



    return (
            products.map(item => {
                let installprice = item.price / item.installments
            return(
                <li className="item">
            <div className={item.isFreeShipping === true ? 'freeshipping' : 'shipbox'}> Free Shipping</div>
            <img className="itempic" src={`/assets/${item.sku}_1.jpg`}></img>
            <h3 className="itemname">{item.title}</h3>
            <p className="itemprice">{item.currencyFormat} {item.price.toFixed(2)}</p>
            <p className="priceinstall">or {item.installments} x {item.currencyFormat}{installprice.toFixed(2)}</p>
            <button className="addbutton" onClick={e => addProduct(item.id)}>Add to Cart</button>
          </li>
            )})
    )
}
