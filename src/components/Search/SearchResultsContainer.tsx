import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

interface SearchResultsContainerProps {
  searchResults: Array<any>;
}

const SearchResultsContainer: React.FC<SearchResultsContainerProps> = ({
  searchResults,
}) => {
  return (
    <Fragment>
      <h5>{`${searchResults.length} found`}</h5>

      <ul>
        {searchResults.map((result) => (
          <SearchResult key={result.login} result={result} />
        ))}
      </ul>
    </Fragment>
  );
};

interface SearchResultProps {
  result: any;
}

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  const { login: username, avatar_url: avatar } = result;
  return (
    <li>
      <img
        style={{ width: '50px', height: 'auto' }}
        src={avatar}
        alt={username}
      />
      <br />
      <br />
      <br />
      <Link to={`user-detail/${username}`}>{`More about ${username}`}</Link>
    </li>
  );
};

export default SearchResultsContainer;
