import React from 'react';
import { useSearchContext } from '../../context/search';

const SearchBar: React.FC = () => {
  const {
    onClickSearchButton,
    onEnterKeyPress,
    onChange,
    searchState: { query, isLoading },
  } = useSearchContext();

  /**
   * @description trigger a search request if key presses is Enter key
   * [keyCode === 13]
   * @param {React.KeyboardEvent} e
   */
  const handleKeyPress: (e: React.KeyboardEvent) => void = (
    e: React.KeyboardEvent,
  ) => {
    if (e.which === 13 || e.keyCode === 13) {
      onEnterKeyPress();
    }
  };

  return (
    <div>
      <input
        onKeyUp={(e) => handleKeyPress(e)}
        onChange={(e) => onChange(e.target.value)}
        value={query}
      />
      <button disabled={isLoading} onClick={onClickSearchButton} type="submit">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
