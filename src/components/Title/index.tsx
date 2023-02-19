import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title = styled.h1`
  font-size: ${(props) => props.theme.font.size.large};
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 39px;
  text-align: center;
  margin: 0;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: ${(props) => props.theme.font.size.medium};
  }
`;

const Component = ({ children, className }: TitleProps) => {
  return <Title className={className}>{children}</Title>;
};

export default Component;
