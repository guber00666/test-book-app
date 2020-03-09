import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { Buttons } from "../../src/components/buttons/buttons";
import { filterForElements } from "../../src/components/utils/ListUtils";
import { books } from "./mockData";

configure({ adapter: new Adapter() });

describe('<Buttons />', () => {

    const props = {
        filterForElements: filterForElements,
        criteriaValue: "0",
        filterValue: "",
        paginatorValue: 1,
        books: books
    };

    const wrapperButtons = shallow(<Buttons {...props}/>);

    it('should render self and other imports', () => {
        expect(wrapperButtons).toMatchSnapshot();
    });
});

