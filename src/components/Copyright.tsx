import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Copyright: React.FC = () => (
  <FooterContainer>
    <FontAwesomeIcon icon={['far', 'copyright']} />
    <span>&nbsp;2019 Bundi Mithamo</span>
  </FooterContainer>
);

const FooterContainer = styled.aside`
  display: flex;
  align-items: center;
`;
export default Copyright;
