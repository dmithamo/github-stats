import React from 'react';

interface SearchProps {
  query: string;
  onKeyUp: (e: any) => void;
  onChange: (e: any) => void;
  onClick: (e: any) => void;
}

const SearchBar: React.FC<SearchProps> = ({
  query,
  onKeyUp,
  onChange,
  onClick,
}) => {
  return (
    <div>
      <input onKeyUp={onKeyUp} onChange={onChange} value={query} />
      <button onClick={onClick} type='submit'>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
