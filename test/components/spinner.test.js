import React from "react";
import Spinner from "../../src/components/spinner";
import Adapter from "enzyme-adapter-react-16/build";
import 'jest-styled-components';
import {SpinnerPulse,
    PulseElement,
    NthChild1,
    NthChild2,
    NthChild3
} from "../../src/components/styled-components/spinner-styles";
import renderer from "react-test-renderer";




configure({ adapter: new Adapter() });



describe("<Spinner />", () => {
    const wrapperSpinner = shallow(
        <Spinner />
    );
    it('should render self and other imports', () => {
        expect(wrapperSpinner.find('div').at(0).hasClass("spinner-container")).toBe(true);
        expect(wrapperSpinner.find('div').at(1).hasClass("spinner-pulse")).toBe(true);
        expect(wrapperSpinner.find('div').at(2).hasClass("spinner-elements")).toBe(true);
        expect(wrapperSpinner.find('div').at(3).hasClass("spinner-element-1")).toBe(true);
        expect(wrapperSpinner.find('div').at(4).hasClass("spinner-element-2")).toBe(true);
        expect(wrapperSpinner.find('div').at(5).hasClass("spinner-element-3")).toBe(true);

        expect(wrapperSpinner.find('SpinnerPulse')).toBeDefined();
        expect(wrapperSpinner.find('PulseElement')).toBeDefined();
        expect(wrapperSpinner.find('NthChild1')).toBeDefined();
        expect(wrapperSpinner.find('NthChild2')).toBeDefined();
        expect(wrapperSpinner.find('NthChild3')).toBeDefined();

    });

    it('CriteriaSelect should have styles', () => {
        const spinnerPulseStyles = renderer.create(<SpinnerPulse />).toJSON();
        expect(spinnerPulseStyles).toHaveStyleRule('width', '200px');
        expect(spinnerPulseStyles).toHaveStyleRule('height', '200px');
        expect(spinnerPulseStyles).toHaveStyleRule('display', 'inline-block');
        expect(spinnerPulseStyles).toHaveStyleRule('overflow', 'hidden');
        expect(spinnerPulseStyles).toHaveStyleRule('background', '#ffffff');
        expect(spinnerPulseStyles).toHaveStyleRule('margin-left', '26em');

        const pulseElementStyles = renderer.create(<PulseElement />).toJSON();
        expect(pulseElementStyles).toHaveStyleRule('width', '100%');
        expect(pulseElementStyles).toHaveStyleRule('height', '100%');
        expect(pulseElementStyles).toHaveStyleRule('position', 'relative');
        expect(pulseElementStyles).toHaveStyleRule('transform', 'translateZ(0) scale(1)');
        expect(pulseElementStyles).toHaveStyleRule('backface-visibility', 'hidden');
        expect(pulseElementStyles).toHaveStyleRule('transform-origin', '0 0');

        const nthChild1Element1 = renderer.create(<NthChild1 />).toJSON();
        expect(nthChild1Element1).toHaveStyleRule('position', 'absolute');
        expect(nthChild1Element1).toHaveStyleRule('width', '28px');
        expect(nthChild1Element1).toHaveStyleRule('box-sizing', 'content-box');
        expect(nthChild1Element1).toHaveStyleRule('left', '36px');
        expect(nthChild1Element1).toHaveStyleRule('background', '#353535');
        expect(nthChild1Element1)
            .toHaveStyleRule('animation', 'cDTAEc 1s cubic-bezier(0,0.5,0.5,1) infinite');
        expect(nthChild1Element1).toHaveStyleRule('animation-delay', '-0.2s');

        const nthChild1Element2 = renderer.create(<NthChild2 />).toJSON();
        expect(nthChild1Element2).toHaveStyleRule('position', 'absolute');
        expect(nthChild1Element2).toHaveStyleRule('width', '28px');
        expect(nthChild1Element2).toHaveStyleRule('box-sizing', 'content-box');
        expect(nthChild1Element2).toHaveStyleRule('left', '86px');
        expect(nthChild1Element2).toHaveStyleRule('background', '#666666');
        expect(nthChild1Element2)
            .toHaveStyleRule('animation', 'fOLAFE 1s cubic-bezier(0,0.5,0.5,1) infinite');
        expect(nthChild1Element2).toHaveStyleRule('animation-delay', '-0.1s');

        const nthChild1Element3 = renderer.create(<NthChild3 />).toJSON();
        expect(nthChild1Element3).toHaveStyleRule('position', 'absolute');
        expect(nthChild1Element3).toHaveStyleRule('width', '28px');
        expect(nthChild1Element3).toHaveStyleRule('box-sizing', 'content-box');
        expect(nthChild1Element3).toHaveStyleRule('left', '136px');
        expect(nthChild1Element3).toHaveStyleRule('background', '#9b9b9b');
        expect(nthChild1Element3)
            .toHaveStyleRule('animation', 'fEBSmt 1s cubic-bezier(0,0.5,0.5,1) infinite');
        expect(nthChild1Element3).toHaveStyleRule('animation-delay', 'initial');

    });
});