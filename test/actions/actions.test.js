import Adapter from "enzyme-adapter-react-16";
import {
    booksHasErrored,
    booksIsLoading,
    booksFetchDataSuccess
} from '../../src/actions/actions';

configure({ adapter: new Adapter() });

describe('actions', () => {
    it('booksHasErrored correct working', () => {
        const error = booksHasErrored;
        const output = {type: 'BOOKS_HAS_ERRORED', hasErrored: true};
        expect(error(true)).toEqual(output);
    });
    it('booksIsLoading correct working', () => {
        const loading = booksIsLoading;
        const output = {type: 'BOOKS_IS_LOADING', isLoading: true};
        expect(loading(true)).toEqual(output);
    });
    it('booksFetchDataSuccess correct working', () => {
        const loading = booksFetchDataSuccess;
        const output = {type: 'BOOKS_FETCH_DATA_SUCCESS',
            books: [{"author": "Asimov Isaac", "genre": "SciFi", "id": 1, "name": "Foundation"}] };
        const books = [{"author": "Asimov Isaac", "genre": "SciFi", "id": 1, "name": "Foundation"}];
        expect(loading(books)).toEqual(output);
    });
});