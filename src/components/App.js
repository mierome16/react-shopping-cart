import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'

import ShoppingItems from './ShoppingItems';
import ShoppingCart from './ShoppingCart'


export default props => {
  return (
    <Provider store={store}>
      <div>
        {/* <ShoppingCart></ShoppingCart> */}
        <ShoppingItems></ShoppingItems>
      </div>
    </Provider>
  )
}