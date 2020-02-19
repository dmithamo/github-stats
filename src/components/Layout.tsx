import React from 'react';
import styled from 'styled-components';
import NavBar from './Nav';
import Footer from './Footer';

export const FrontLayout: React.FC = ({ children }) => (
  <CenterMainContentContainer>
    <div id="nav-bar">
      <NavBar />
    </div>
    <div id="main-content">{children}</div>
    <div id="footer">
      <Footer />
    </div>
  </CenterMainContentContainer>
);

const CenterMainContentContainer = styled.section`
  margin: 0;
  padding: 0;

  div#nav-bar {
    position: fixed;
    top: 0;
    right: 0;
    margin: 0;
  }

  div#footer {
    margin: 0;
  }

  div#main-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;
