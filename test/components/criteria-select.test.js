import React from "react";
import ReactDOM from "react-dom";
import CriteriaSelect from '../../src/components/criteria-select';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../src/reducers/reducer';

test("Render CriteriaSelect without crashing", () => {
    const rootDiv = document.createElement("div");
    const store = createStore(reducer);
    ReactDOM.render( 
        <Provider store={store}>
            <CriteriaSelect />
          </Provider>,
          rootDiv);
    ReactDOM.unmountComponentAtNode(rootDiv);
});