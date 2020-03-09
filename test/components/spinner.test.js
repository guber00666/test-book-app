import React from "react";
import Spinner from "../../src/components/spinner";
import Adapter from "enzyme-adapter-react-16/build";
import 'jest-styled-components';

configure({ adapter: new Adapter() });

describe("<Spinner />", () => {
    const wrapperSpinner = shallow(
        <Spinner />
    );
    it('should render self and other imports', () => {
        expect(wrapperSpinner).toMatchSnapshot();
    });
});