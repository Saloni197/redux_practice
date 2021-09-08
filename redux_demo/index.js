const redux =require('redux') 
const createStore = redux.createStore


const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREM'


function buy_cake (){
return {
        type: BUY_CAKE,
        info: 'first redux action'
        }
}

function buy_icecream(){
    return{
        type: BUY_ICECREAM,
        info: 'second redux action'
    }
}


const initialState = {
    numberOfCakes:10,
    numberOfIcecream:10
}


const  reducer = (state =initialState,action) =>{
 switch(action.type){
     case BUY_CAKE : return{
         ...state,
         numberOfCakes : state.numberOfCakes - 1
     }
     case BUY_ICECREAM : return{
         ...state,
         numberOfIcecream : state.numberOfIcecream - 2
     }
     default: return state
 }
}


const store = createStore(reducer)
console.log('initial State', store.getState())
const unsbscribe = store.subscribe(()=>console.log('updated State',store.getState()))
store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_icecream())
store.dispatch(buy_icecream())
unsbscribe()