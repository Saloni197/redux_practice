import { BUY_ICE_CREAM } from "./iceCreamTypes";

const initialState = {
    numberOfIceCream : 20
}
const iceCreameReducer = (state=initialState,action) =>{
  switch (action.type) {
      case BUY_ICE_CREAM:
          return{
              ...state,
              numberOfIceCream : state.numberOfIceCream - 2
          }
      default: return state
  }
}

export default iceCreameReducer