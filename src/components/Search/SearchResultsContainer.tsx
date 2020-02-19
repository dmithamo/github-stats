import React from 'react';
import { Link } from 'react-router-dom';

interface SearchResultsContainerProps {
  searchResults: Array<{ [key: string]: any }>;
}

const SearchResultsContainer: React.FC<SearchResultsContainerProps> = ({
  searchResults,
}) => {
  return (
    <>
      <h5>{`${searchResults.length} found`}</h5>

      <ul>
        {searchResults.map(result => (
          <SearchResult key={result.login} result={result} />
        ))}
      </ul>
    </>
  );
};

interface SearchResultProps {
  result: any;
}

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  const { login: username, avatar_url: avatar } = result;
  return (
    <li>
      <Link to={`user-detail/${username}`}>
        <img
          style={{ width: '50px', height: 'auto' }}
          src={avatar}
          alt={username}
        />
        <span>{`More about ${username}`}</span>
      </Link>
    </li>
  );
};

export default SearchResultsContainer;
