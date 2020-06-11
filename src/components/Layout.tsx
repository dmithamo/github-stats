import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import NavBar from './Nav';

interface LayoutProps {
  children?: JSX.Element;
}
export const FrontLayout: React.FC<LayoutProps> = ({
  children,
}: LayoutProps) => (
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
    min-height: 100vh;
  }
`;
