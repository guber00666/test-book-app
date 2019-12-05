import React from "react";
import ReactDOM from "react-dom";
import App from "../../src/components/app";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../src/reducers/reducer';

test("Render App without crashing", () => {
    const rootDiv = document.createElement("div");
    const store = createStore(reducer);
    ReactDOM.render( 
    <Provider store={store}>
        <App />
      </Provider>,
      rootDiv);
    ReactDOM.unmountComponentAtNode(rootDiv);
});