import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import {createStore,applyMiddleware,compose} from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import  combinedReducers  from './Reducers/index.js';

const store = createStore(combinedReducers,compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider >,
  document.getElementById('root')
);

