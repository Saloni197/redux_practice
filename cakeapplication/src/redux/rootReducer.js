import { combineReducers } from "redux";
import cakeReducer from './cakes/cakeReducer'
import iceCreameReducer from './iceCreame/iceCreamReducer'

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreameReducer
})

export default rootReducer