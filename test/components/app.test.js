import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import CriteriaSelect from '../../src/components/criteria-select';
import FilterInput from '../../src/components/filter-input';
import List from '../../src/components/list';
import App from "../../src/components/app";
import renderer from 'react-test-renderer'
import { StyledApp } from "../../src/components/styled-components/components-styles";
import 'jest-styled-components';

configure({ adapter: new Adapter() });

describe('<App />', () => {

    const wrapperApp = shallow(
        <App/>
    );

    it('should render self and other imports', () => {
        expect(wrapperApp.find('section').hasClass("books-app")).toBe(true);
        expect(wrapperApp.find('div').hasClass("container")).toBe(true);
        expect(wrapperApp.find('h1').text()).toBe('Books');

        expect(wrapperApp.find(StyledApp)).toBeDefined();
        expect(wrapperApp.find(CriteriaSelect)).toBeDefined();
        expect(wrapperApp.find(FilterInput)).toBeDefined();
        expect(wrapperApp.find(List)).toBeDefined();

        expect(wrapperApp).toMatchSnapshot();

    });
    it('should have styles', () => {
        const styleApp = renderer.create(<StyledApp/>).toJSON();
        expect(styleApp).toHaveStyleRule('margin-top', '30px');

        expect(styleApp).toMatchSnapshot();
    })

});