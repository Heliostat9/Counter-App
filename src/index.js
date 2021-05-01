import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducer';
import {Provider} from 'react-redux';
import App from './components/app';


let store = createStore(reducer);

// const {plus, minus, reset} = bindActionCreators(actions, dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));




