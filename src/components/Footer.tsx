import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Copyright from './Copyright';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <ContactIcon href="https://github.com/dmithamo">
          <Copyright />
        </ContactIcon>

        <ContactIcon href="mailto:dennisbmithamo@gmail.com">
          <FontAwesomeIcon icon="envelope" />
          &nbsp;dennisbmithamo@gmail.com
        </ContactIcon>

        <ContactIcon href="https://github.com/dmithamo">
          <FontAwesomeIcon icon={['fab', 'github']} />
          &nbsp;dmithamo
        </ContactIcon>

        <ContactIcon href="https://www.linkedin.com/in/dennis-mithamo/">
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
          &nbsp;dennis-mithamo
        </ContactIcon>
      </Container>
      <span>
        This app is free for use and always will be. Free as in Uhuru Park.
        Means you are free to use it for its intended use, but cannot claim it
        as your own. Quite like Uhuru Park
      </span>
    </FooterContainer>
  );
};

interface ContactIconProps {
  href: string;
  children: any;
}
const ContactIcon: React.FC<ContactIconProps> = ({ href, children }) => {
  return (
    <ContactIconContainer target="blank" href={href}>
      {children}
    </ContactIconContainer>
  );
};

const ContactIconContainer = styled.a`
  color: #e3e3e3;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 200px;
  margin: 2px;

  background-color: #1d3e5398;
  padding: 1.2em;

  :hover {
    background-color: #1d3e53;
  }
`;

const FooterContainer = styled.footer`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background-color: #00000010;
  padding: 5em 0;
  box-shadow: 0 -1px 3px 2px #00000030;
  font-weight: bold;
  opacity: 0.7;

  p {
    margin: 0;
  }
`;

const Container = styled.aside`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5em;

  @media (max-width: 825px) {
    flex-direction: column;
  }
`;

export default Footer;
