import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  children: React.ReactNode;
}

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 39px;
  text-align: center;
  margin: 0;
`;

const Component = ({ children }: TitleProps) => {
  return <Title>{children}</Title>;
};

export default Component;
