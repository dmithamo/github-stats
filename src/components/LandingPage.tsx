import React from 'react';
import styled from 'styled-components';
import SearchResultsContainer from './Search/SearchResultsContainer';
import SearchBar from './Search/SearchBar';
import Spinner from './Spinner';
import Logo from './Logo';

interface State {
  ghUsername: string;
  searchResults: any;
  loading: Boolean;
  error: any;
}

// const { REACT_APP_GH_CLIENT_ID, REACT_APP_GH_CLIENT_SECRET } = process.env;

const LandingPage: React.FC = () => {
  const [query, setQuery] = React.useState('');
  const handleSearchInputChange = (e: any) => {
    setQuery(e.target.value);
  };

  const [isLoading, setIsLoading] = React.useState(false);
  const handleEnterKeyPress = (e: any) => {
    if (e.keyCode === 13 || e.which === 13) {
      setIsLoading(true);
    }
  };

  const searchResults: Array<{ [key: string]: any }> = [];
  const handleSearchBtnClick = () => {};

  return (
    <Container>
      <Logo />
      <SearchBar
        onKeyUp={(e: any) => handleEnterKeyPress(e)}
        onChange={(e: any) => handleSearchInputChange(e)}
        onClick={handleSearchBtnClick}
        query={query}
      />

      {isLoading && <Spinner content=" search results" />}

      {searchResults && searchResults.length > 0 && (
        <SearchResultsContainer searchResults={searchResults} />
      )}
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
