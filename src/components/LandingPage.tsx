import React from 'react';
import styled from 'styled-components';
import { useSearchContext } from '../context/search';
import Logo from './Logo';
import SearchBar from './Search/SearchBar';
import SearchResultsContainer from './Search/SearchResultsContainer';
import Spinner from './Spinner';

const LandingPage: React.FC = () => {
  const {
    searchState: { isLoading, searchResults, error },
  } = useSearchContext();

  return (
    <Container>
      <Logo />
      <SearchBar />

      {isLoading && <Spinner content=" search results" />}

      {searchResults && searchResults.length > 0 ? (
        <SearchResultsContainer searchResults={searchResults} />
      ) : (
        <p>Enter a username to search</p>
      )}

      {error && <p>{JSON.stringify(error)}</p>}
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default LandingPage;
