import React from 'react';
import Routes from './components/Routes';
import SearchContextProvider from './context/search';

const App: React.FC = () => {
  return (
    <SearchContextProvider>
      <Routes />
    </SearchContextProvider>
  );
};

export default App;
