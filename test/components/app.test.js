import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import CriteriaSelect from '../../src/components/criteria-select';
import FilterInput from '../../src/components/filter-input';
import List from '../../src/components/list';
import App from "../../src/components/app";
import renderer from 'react-test-renderer'
import { configure } from 'enzyme';
import { AppStyles } from "../../src/components/styled-components/components-styles";
import 'jest-styled-components';

configure({ adapter: new Adapter() });

describe('<App />', () => {
    it('should render self and other imports', () => {
        const renderedComponent = shallow(
            <App/>
        );
        expect(renderedComponent.find('section').hasClass("books-app")).toBe(true);
        expect(renderedComponent.find('div').hasClass("container")).toBe(true);
        expect(renderedComponent.find('h1').text()).toBe('Books');

        expect(renderedComponent.find(AppStyles)).toBeDefined();
        expect(renderedComponent.find(CriteriaSelect)).toBeDefined();
        expect(renderedComponent.find(FilterInput)).toBeDefined();
        expect(renderedComponent.find(List)).toBeDefined();

        expect(renderedComponent).toMatchSnapshot();

    });
    it('should have styles', () => {
        const styleApp = renderer.create(<AppStyles/>).toJSON();
        expect(styleApp).toHaveStyleRule('margin-top', '30px');

        expect(styleApp).toMatchSnapshot();
    })

});