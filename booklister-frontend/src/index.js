import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import appReducer from './reducers/appReducer';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(appReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
