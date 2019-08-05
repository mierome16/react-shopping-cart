const initialState = {
  products: [],
  addedProducts: [],
  total: 0
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {...state, products: action.payload}
    case 'ADD_PRODUCT':
      const sameid = state.addedProducts.find(item => action.payload.id === item.id)
      if(sameid) {
        sameid.quantity += 1
        sameid.totalPrice = sameid.quantity * sameid.price
        console.log('hello')
      } else {
        console.log('bye')
      return {...state, addedProducts:[action.payload, ...state.addedProducts]
        
      }
    }
      case 'DELETE_PRODUCT':
        // const samedelete = state.addedProducts.find(item => action.payload.id === item.id)
        // if (samedelete) {
        //   samedelete.quantity -= 1
        //   samedelete.totalPrice = samedelete.quantity * samedelete.price
        // }

          return {...state, addedProducts: state.addedProducts.filter(product => Number(action.payload) !== product.id)}
    default:
      return state
  }
}