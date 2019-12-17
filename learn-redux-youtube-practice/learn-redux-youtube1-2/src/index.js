import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* import provider to connect react compo. with redux global store */
import { Provider } from "react-redux";
import { createStore } from "redux";

/* import reducer */
import reducer from "./reducers/reducer"

//create store 
let store = createStore(reducer)



ReactDOM.render( 
<Provider store={store}><App /></Provider>
, document.getElementById('root'));

serviceWorker.unregister();
