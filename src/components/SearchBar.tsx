import React from 'react';

interface SearchProps {
  query: string;
  onChange: (e: any) => void;
  onClick: (e: any) => void;
}

const SearchBar: React.FC<SearchProps> = ({ query, onChange, onClick }) => {
  return (
    <div>
      <input onChange={onChange} value={query} />
      <button onClick={onClick} type='submit'>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
