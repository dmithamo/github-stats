import React from 'react';
import api from '../../services/api';
import { decryptValue, encryptValue } from '../encryptor';
import reducer, { INIT_SEARCH_STATE, SEARCH_ACTION_TYPES } from './reducer';

const SearchContext = React.createContext(INIT_SEARCH_STATE as any);
interface SearchContextProps {
  children: JSX.Element;
}
/**
 * @description Create the search context provider and the
 * methods that update it
 * @param {JSX.Element} param0
 * @return {JSX.Element}
 */
const SearchContextProvider: React.FC<SearchContextProps> = ({
  children,
}: SearchContextProps) => {
  const cachedState = decryptValue(
    sessionStorage.getItem('searchState'),
  ) as any;

  const [searchState, dispatch] = React.useReducer(
    reducer,
    cachedState || INIT_SEARCH_STATE,
  );

  /*
   *Save state whenever it changes to sessionStorage (encrypted) for persistence
   */
  React.useEffect(() => {
    sessionStorage.setItem('searchState', encryptValue(searchState) as string);
  }, [searchState]);

  const onChange: (query: string) => void = (query) => {
    dispatch({ type: SEARCH_ACTION_TYPES.ON_CHANGE, payload: query });
  };

  const onEnterKeyPress: () => void = () => {
    onClickSearchButton();
  };

  const onClickSearchButton: () => void = async () => {
    dispatch({ type: SEARCH_ACTION_TYPES.ON_FETCH_REQUEST });

    const res = await api.searchUsers(searchState.query);
    if (res.name === 'Error') {
      dispatch({
        type: SEARCH_ACTION_TYPES.ON_FETCH_ERR,
        payload: res.message,
      });
      return;
    }

    if (res) {
      dispatch({
        type: SEARCH_ACTION_TYPES.ON_FETCH_SUCCESS,
        payload: res.data.items,
      });
    }
  };

  const value: any = React.useMemo(() => {
    return { searchState, onChange, onEnterKeyPress, onClickSearchButton };
  }, [searchState]) as any;

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchContextProvider;

/**
 * @description Avail Search state to any component needing it
 * @return {any}
 */
export function useSearchContext() {
  return React.useContext(SearchContext);
}
