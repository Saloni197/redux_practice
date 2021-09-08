import { ADD_TO_CART } from "../Constant";
const initialState = {
    cartData: []
}
 const cartReducer = (state = [],action) =>{
 switch (action.type) {
     case ADD_TO_CART:
         console.warn("reducer",action)
         return[
            ...state,
           { cartData:action.data}
         ]
     default: return state
 }
}

export default cartReducer