import React from "react";
import ReactDOM from "react-dom";
import FilterInput from "../../src/components/filter-input";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../src/reducers/reducer';

test("Render FilterInput without crashing", () => {
    const rootDiv = document.createElement("div");
    const store = createStore(reducer);
    ReactDOM.render( 
        <Provider store={store}>
            <FilterInput />
          </Provider>,
          rootDiv);
    ReactDOM.unmountComponentAtNode(rootDiv);
});