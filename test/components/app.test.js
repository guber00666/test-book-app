import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import App from "../../src/components/app";

configure({ adapter: new Adapter() });

describe('<App />', () => {

    const wrapperApp = shallow(<App/>);

    it('should render self and other imports', () => {
        expect(wrapperApp).toMatchSnapshot();
    });

});