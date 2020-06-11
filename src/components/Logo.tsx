import React from 'react';
import styled from 'styled-components';

interface LogoProps {
  size?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'normal' }: LogoProps) => {
  const isSmall = size === 'small';
  return (
    <LogoContainer isSmall={isSmall}>
      {isSmall ? 'GS' : 'GitHub Stats'}
    </LogoContainer>
  );
};

const LogoContainer: any = styled.span`
  margin: 0;
  font-weight: bold;
  color: black;
  font-family: 'Abril Fatface', cursive;

  font-size: ${(props: any) => (props.isSmall ? '1em' : '2em')};
`;

export default Logo;
