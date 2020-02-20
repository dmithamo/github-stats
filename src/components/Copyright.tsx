import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const Copyright: React.FC = () => (
  <FooterContainer>
    <FontAwesomeIcon icon={['far', 'copyright']} />
    <span>&nbsp;2020 Dennis Mithamo</span>
  </FooterContainer>
);

const FooterContainer = styled.aside`
  display: flex;
  align-items: center;
`;
export default Copyright;
