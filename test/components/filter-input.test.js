import React from "react";
import Adapter from "enzyme-adapter-react-16/build";
import FilterInput from '../../src/components/filter-input';
import renderer from 'react-test-renderer'
import { createStore, applyMiddleware } from 'redux';
import { StyledSearchPanel } from "../../src/components/styled-components/components-styles";
import {Provider} from "react-redux";
import {initialState} from '../../src/reducers/reducer'
import 'jest-styled-components';

import {
    mapStateToFilterProps,
    mapDispatchToFilterProps
} from '../../src/actions/index'
import reducer from "../../src/reducers";
import {crashReporter, logger} from "../../src/middlewares";
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

    it('Frilterinput should render self and other imports', () => {
        expect(wrapperFilter.find('section').hasClass('search-panel')).toBe(true);
        expect(wrapperFilter.find('div').at(0).hasClass('input-group mb-3')).toBe(true);
        expect(wrapperFilter.find('input').hasClass('form-control')).toBe(true);

        expect(wrapperFilter.find('StyledSearchPanel')).toBeDefined();

        expect(wrapperFilter).toMatchSnapshot();
    });

    it('Filterinput should have styles', () => {
       const searchPanelStyles = renderer.create(<StyledSearchPanel />).toJSON();
       expect(searchPanelStyles).toHaveStyleRule('border', 'solid 1px');
       expect(searchPanelStyles).toHaveStyleRule('border-radius', '0.3em');

       expect(searchPanelStyles).toMatchSnapshot();
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