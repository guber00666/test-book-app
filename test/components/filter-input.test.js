import React from "react";
import Adapter from "enzyme-adapter-react-16/build";
import FilterInput from '../../src/components/filter-input';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from "react-redux";
import {initialState} from '../../src/reducers/reducer'
import 'jest-styled-components';

import {
    mapStateToFilterProps,
    mapDispatchToFilterProps
} from '../../src/actions/actions'
import reducer from "../../src/reducers";
import {crashReporter, logger} from "../../src/middlewares/middlewares";
import thunk from "redux-thunk";


configure({ adapter: new Adapter() });

const store = createStore(reducer,
    applyMiddleware(logger, crashReporter, thunk));


describe("<FilterInput /> ", () => {
    const wrapperFilter = mount(
        <Provider store={store}>
            <FilterInput />
        </Provider>
    );

    it('Filterinput should render self and other imports', () => {
        expect(wrapperFilter).toMatchSnapshot();
    });

    it('check input correct working', () => {
        const event = {target: {value: '1'}};
        expect(wrapperFilter.find('input').props().value).toEqual('');
        wrapperFilter.find('input').simulate('change', event);
        expect(wrapperFilter.find('input').props().value).toEqual('1');
    });

    it('filterValue should show previously rolled value', () => {
        expect(mapStateToFilterProps(initialState).filterValue).toEqual("");
    });

    it('filterValue should roll the dice again when onChange work out', () => {
        const dispatch = jest.fn();
        mapDispatchToFilterProps(dispatch).setFilterValue();
        expect(dispatch.mock.calls[0][0]).toEqual({  type: 'SET_FILTER' });
    });

});