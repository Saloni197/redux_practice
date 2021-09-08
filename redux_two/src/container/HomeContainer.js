import Home from "../components/Home";
import {connect} from 'react-redux'
import addToCart from '../services/Actions/Action'


const mapStateToProps=state=>({
  // data:state.cardItems
  data:state
})
const mapDispatchToProps=dispatch=>({
  addToCartHandler:data=>dispatch(addToCart(data))

})


export default connect(mapStateToProps,mapDispatchToProps)(Home)