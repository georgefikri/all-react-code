import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* import store - globalised state */
import {createStore} from "redux"

/* import merged/combined reducers here */
import reducers from "./reducers/index"

/* connect react & redux together */
import {Provider} from "react-redux"

let store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    




ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, 
document.getElementById('root'));

