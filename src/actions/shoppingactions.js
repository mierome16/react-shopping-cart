import store from '../store'
import axios from 'axios'


export function getProducts() {
    axios.get('http://localhost:3001/products').then(resp => {
            store.dispatch({
                type: "GET_PRODUCTS",
                payload: resp.data
            })
        })
}

export function addProduct(id) {
    axios.get('http://localhost:3001/products/' + id).then(resp => {
        store.dispatch({
            type: 'ADD_PRODUCT',
            payload: {...resp.data, quantity:1, totalPrice: resp.data.price}
        })
      })
    
}

export function remove(id) {
    store.dispatch({
      type: 'DELETE_PRODUCT',
      payload: id
    })
  }



