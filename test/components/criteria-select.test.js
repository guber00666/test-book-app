import React from "react";
import Adapter from "enzyme-adapter-react-16/build";
import CriteriaSelect from '../../src/components/criteria-select';
import { Provider } from 'react-redux';
import {initialState} from '../../src/reducers/reducer';
import 'jest-styled-components';
import {
    mapStateToCriteriaProps,
    mapDispatchToCriteriaProps
} from '../../src/actions/actions';
import {applyMiddleware, createStore} from "redux";
import reducer from "../../src/reducers";
import {crashReporter, logger} from "../../src/middlewares/middlewares";
import thunk from "redux-thunk";

configure({ adapter: new Adapter() });

const store = createStore(reducer,
    applyMiddleware(logger, crashReporter, thunk));

describe("<CriteriaSelect />",() => {

    const wrapperCriteria = mount(
        <Provider store={store}>
            <CriteriaSelect />
        </Provider>
    );

    it('CriteriaSelect should render self and other imports', () => {
        expect(wrapperCriteria).toMatchSnapshot();
    });
    it('check select correct working', () => {
       const event = {target: {value: '1'}};
       expect(wrapperCriteria.find('option').at(0).prop('value')).toEqual('0');
       wrapperCriteria.find('option').at(1).simulate('change', event);
       wrapperCriteria.update();
       expect(wrapperCriteria.find('option').at(1).prop('value')).toEqual('1');
    });

    it('criteriaValue should show previously rolled value', () => {
        expect(mapStateToCriteriaProps(initialState).criteriaValue).toEqual("0");
    });

    it('criteriaValue should roll the dice again when onChange work out', () => {
        const dispatch = jest.fn();

        mapDispatchToCriteriaProps(dispatch).setCriteriaValue();
        expect(dispatch.mock.calls[0][0]).toEqual({ type: 'SET_CRITERIA' });
    });
});