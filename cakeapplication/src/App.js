
import './App.css';
import { Provider } from 'react-redux';
import CakeContainer from './components/cakeContainer';
import store from './redux/store';
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store ={store}>
    <div className="App">
    <ItemContainer cake/> 
    <ItemContainer/>
    <HookCakeContainer/>
     <CakeContainer/>
     <IceCreamContainer/>
    </div>
    </Provider>
  );
}

export default App;
