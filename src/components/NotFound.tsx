import React from 'react';
import styled from 'styled-components';
import { StyledLink } from './Nav';

const FourOhFourPage: React.FC = () => (
  <Container>
    <h2>404</h2>
    <p>
      You must be Lost. Hi Lost. Click
      <span>
        <StyledLink to="/">here</StyledLink>
      </span>
      to go back home, where its warm and safe
    </p>
  </Container>
);

const Container = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export default FourOhFourPage;
