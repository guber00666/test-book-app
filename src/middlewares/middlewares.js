import {booksFetchDataSuccess, booksHasErrored, booksIsLoading} from "../actions/actions";

export const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result
  };
  
export const crashReporter = store => next => action => {
    try {
      return next(action)
    } catch (err) {
      console.error('Caught an exception!', err);
      Raven.captureException(err, {
        extra: {
          action,
          state: store.getState()
        }
      });
      throw err
    }
  };

export function booksFetchData(url) {
    return (dispatch) => {

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(booksIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(booksFetchDataSuccess(items)))
            .catch(() => dispatch(booksHasErrored(true)));
    };
}


  