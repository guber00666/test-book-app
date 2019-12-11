import React from "react";
import Adapter from "enzyme-adapter-react-16/build";
import CriteriaSelect from '../../src/components/criteria-select';
import reducer from '../../src/reducers/reducer';
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {CriteriaStyles, FormStyles} from "../../src/components/styled-components/components-styles";
import {configure} from 'enzyme';
import 'jest-styled-components';

configure({ adapter: new Adapter() });


describe("<CriteriaSelect />",() => {
    it('should render self and other imports', () => {
        const store = createStore(reducer);
        const renderedComponent = mount(
            <Provider store={store}>
                <CriteriaSelect />
            </Provider>
        );
        expect(renderedComponent.find('section').hasClass("criteria-select")).toBe(true);
        expect(renderedComponent.find('div.form-group').length).toBe(1);
        expect(renderedComponent.find('label').text()).toBe('Criteria select');
        expect(renderedComponent.find('select').hasClass("form-control")).toBe(true);

        expect(renderedComponent.find('CriteriaStyles')).toBeDefined();
        expect(renderedComponent.find('FormStyles')).toBeDefined();

        expect(renderedComponent).toMatchSnapshot();
    });
    it('should have styles', () => {
        const criteriaStyles = renderer.create(<CriteriaStyles />).toJSON();
        expect(criteriaStyles).toHaveStyleRule('margin-top', '30px');
        expect(criteriaStyles).toHaveStyleRule('font-weight', 'bold');
        const formStyles = renderer.create(<FormStyles />).toJSON();
        expect(formStyles).toHaveStyleRule('border', 'solid 1px');
        expect(formStyles).toHaveStyleRule('border-radius', '0.3em');

        expect(criteriaStyles).toMatchSnapshot();
        expect(formStyles).toMatchSnapshot();
    })
});