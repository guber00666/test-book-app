import React from "react";
import Adapter from "enzyme-adapter-react-16/build";
import CriteriaSelect from '../../src/components/criteria-select';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import {initialState} from '../../src/reducers/reducer';
import { StyledCriteria, StyledForm } from "../../src/components/styled-components/components-styles";
import 'jest-styled-components';
import {
    mapStateToCriteriaProps,
    mapDispatchToCriteriaProps
} from '../../src/actions/index';
import {applyMiddleware, createStore} from "redux";
import reducer from "../../src/reducers";
import {crashReporter, logger} from "../../src/middlewares";
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
        expect(wrapperCriteria.find('section').hasClass("criteria-select")).toBe(true);
        expect(wrapperCriteria.find('div').at(1).hasClass("form-group")).toBe(true);
        expect(wrapperCriteria.find('label').text()).toBe('Criteria select');
        expect(wrapperCriteria.find('select').hasClass("form-control")).toBe(true);

        expect(wrapperCriteria.find('StyledCriteria')).toBeDefined();
        expect(wrapperCriteria.find('StyledForm')).toBeDefined();

        expect(wrapperCriteria).toMatchSnapshot();
    });

    it('CriteriaSelect should have styles', () => {
        const criteriaStyles = renderer.create(<StyledCriteria />).toJSON();
        expect(criteriaStyles).toHaveStyleRule('margin-top', '30px');
        expect(criteriaStyles).toHaveStyleRule('font-weight', 'bold');

        const formStyles = renderer.create(<StyledForm />).toJSON();
        expect(formStyles).toHaveStyleRule('border', 'solid 1px');
        expect(formStyles).toHaveStyleRule('border-radius', '0.3em');

        expect(criteriaStyles).toMatchSnapshot();
        expect(formStyles).toMatchSnapshot();
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