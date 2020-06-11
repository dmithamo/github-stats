import React from 'react';
import { Link } from 'react-router-dom';

interface SearchResultsContainerProps {
  searchResults: Array<{ [key: string]: any }>;
}

const SearchResultsContainer: React.FC<SearchResultsContainerProps> = ({
  searchResults,
}: SearchResultsContainerProps) => {
  const SEARCH_RESULTS_LIMIT =
    searchResults.length > 10 ? 10 : searchResults.length;
  return (
    <>
      <h5>
        {`Showing ${SEARCH_RESULTS_LIMIT} of ${searchResults.length} found`}
      </h5>

      <ul>
        {searchResults.slice(0, SEARCH_RESULTS_LIMIT).map((result) => (
          <SearchResult key={result.login} result={result} />
        ))}
      </ul>
    </>
  );
};

interface SearchResultProps {
  result: any;
}

const SearchResult: React.FC<SearchResultProps> = ({
  result,
}: SearchResultProps) => {
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
