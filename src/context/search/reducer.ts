export type State = {
  query: string;
  searchResults: Array<{ [key: string]: any }>;
  error: boolean | { message: string; status: number };
  isLoading: boolean;
};

type Action = {
  type: string;
  payload?: any;
};

type Reducer = (prevState: State, action: Action) => State;

type SearchActionTypes = {
  ON_CHANGE: string;
  ON_SEARCH: string;
  ON_FETCH_REQUEST: string;
  ON_FETCH_SUCCESS: string;
  ON_FETCH_ERR: string;
};

export const SEARCH_ACTION_TYPES: SearchActionTypes = {
  ON_CHANGE: 'ON_CHANGE',
  ON_SEARCH: 'ON_SEARCH',
  ON_FETCH_REQUEST: 'ON_FETCH_REQUEST',
  ON_FETCH_SUCCESS: 'ON_FETCH_SUCCESS',
  ON_FETCH_ERR: 'ON_FETCH_ERR',
};

export const INIT_SEARCH_STATE: State = {
  query: '',
  searchResults: [],
  error: false,
  isLoading: false,
};

const searchReducer: Reducer = (prevState = INIT_SEARCH_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_ACTION_TYPES.ON_CHANGE:
      return {
        ...prevState,
        query: payload,
        isLoading: false,
        error: false,
        searchResults: [],
      };

    case SEARCH_ACTION_TYPES.ON_FETCH_REQUEST:
      return { ...prevState, isLoading: true, searchResults: [] };

    case SEARCH_ACTION_TYPES.ON_FETCH_SUCCESS:
      return {
        ...prevState,
        isLoading: false,
        searchResults: payload,
      };

    case SEARCH_ACTION_TYPES.ON_FETCH_ERR:
      return { ...prevState, isLoading: false, error: payload };

    default:
      return prevState;
  }
};

export default searchReducer;
