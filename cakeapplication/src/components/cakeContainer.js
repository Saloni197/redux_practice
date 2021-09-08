import React from 'react';
import { buy_cake } from '../redux/index.js';
import {connect} from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number Of Cakes - {props.numOfCakes}</h2>
            <button onClick = {props.buyCake}>Buy Cake</button>
        </div>
    );
}

const mapStateToProps = state =>{
    return{
        numOfCakes : state.cake.numberOfCakes
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        buyCake : ()=>{dispatch(buy_cake())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer);