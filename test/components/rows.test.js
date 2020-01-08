import React from "react";
import Rows from "../../src/components/rows";
import Adapter from "enzyme-adapter-react-16/build";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducer from "../../src/reducers";
import {crashReporter, logger} from "../../src/middlewares/middlewares";
import thunk from "redux-thunk";
import { books } from './mockData'

configure({ adapter: new Adapter() });

const store = createStore(reducer,
    applyMiddleware(logger, crashReporter, thunk));

describe('Rows', () => {

    const props = {
        books
    };

    const rowsWrapper = mount(
        <Provider store={store} {...props}>
            <Rows />
        </Provider>
        );

    it('rendered correct', () => {
       expect(rowsWrapper.map(el => el)).toMatchSnapshot();
    });
});