import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { buy_cake } from '../redux';

function HookCakeContainer(props) {
     const numOfCakes = useSelector(state => state.cake.numberOfCakes)
     const dispatch = useDispatch()
    return (
        <div>
            <h2>Number Of Cakes - {numOfCakes}</h2>
            <button onClick = {()=>dispatch(buy_cake())}>Buy Cake</button>
        </div>
    );
}

export default HookCakeContainer;