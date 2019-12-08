import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import reducer from '../src/reducers';
import App from './components/app';
import { logger,
         crashReporter } from '../src/middlewares/index';
         
const store = createStore(reducer,  
  applyMiddleware(logger, crashReporter, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);