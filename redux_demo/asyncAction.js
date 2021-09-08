const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')


const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchusersrequest = ()=>{
    return{
        type:FETCH_USERS_REQUEST
    }
}

const fetchuserssuccess = users => {
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

const fetchusersfailure  = error => {
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

const reducer = (state = initialState,action) =>{
  switch (action.type) {
      case FETCH_USERS_REQUEST:
          return{
              ...state,
             loading:true
          }
       case FETCH_USERS_SUCCESS:
           return{
               ...state,
               loading:false,
               users:action.payload,
               error: ''
           }
       case FETCH_USERS_FAILURE:
           return{
               ...state,
               loading:false,
               users: [],
               error:action.payload
           }
  }
}

const fetchusers = ()=>{
    return function(dispatch) {
        dispatch(fetchusersrequest())
  axios.get('https://jsonplaceholder.typicode.com/users1')
  .then(res=>{
      const users = res.data.map(users=> users.id)
   dispatch(fetchuserssuccess(users))
  }).catch(error=>{
  dispatch(fetchusersfailure(error.message))
  })
    }
}


const store = createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchusers())
