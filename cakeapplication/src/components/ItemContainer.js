import React from 'react';
import {connect} from 'react-redux'
import { buy_cake, buy_iceCream } from '../redux';

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick = {props.buyItem}>Buy Item</button>
        </div>
    );
}

const mapStateToProps = (state,ownProps) =>{
    const itemState = ownProps.cake ?
    state.cake.numberOfCakes :
    state.iceCream.numberOfIceCream

    return{
        item:itemState
    }

}

const mapDispatchToProps = (dispatch,ownProps) =>{
  const dispatchFunction = ownProps.cake ?
  ()=> dispatch(buy_cake() ) :
  ()=> dispatch(buy_iceCream())

  return{
      buyItem : dispatchFunction
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (ItemContainer);