import React from "react";
import ReactDOM from "react-dom";
import { books } from '../../src/services/books-service'
import List from "../../src/components/list";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../src/reducers/reducer';

test("Render List without crashing", () => {
    const rootDiv = document.createElement("div");
    const store = createStore(reducer);
    ReactDOM.render( 
        <Provider store={store}>
            <List data={books} />
          </Provider>,
          rootDiv);
    ReactDOM.unmountComponentAtNode(rootDiv);
});