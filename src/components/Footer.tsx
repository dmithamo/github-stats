import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
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
const ContactIcon: React.FC<ContactIconProps> = ({
  href,
  children,
}: ContactIconProps) => {
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
  width: fit-content;
  margin: 2px;

  background-color: #1d3e5398;
  padding: 1.2em;

  :hover {
    background-color: #1d3e53;
  }
`;

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 5em 0;
  font-weight: bold;
  color: white;

  p {
    margin: 0;
  }
`;

const Container = styled.aside`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5em;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export default Footer;
