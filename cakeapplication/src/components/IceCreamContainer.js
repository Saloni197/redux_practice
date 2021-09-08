import React from 'react';
import { buy_iceCream } from '../redux';
import {connect} from 'react-redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number Of IceCream -{props.numOfIceCream} </h2>
            <button onClick={props.buyIcecream}>Buy Icecream</button>
        </div>
    );
}
const mapStateToProps = state=>{
    return{
    numOfIceCream : state.iceCream.numberOfIceCream
}
}

const mapDispatchToProps = dispatch =>{
    return{
        buyIcecream: ()=>{dispatch(buy_iceCream())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer);