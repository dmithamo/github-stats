import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Homepage from './components/Homepage';
import NavBar from './components/Nav';
// import User from './components/User';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Homepage />
    </Router>
  );
};

export default App;
