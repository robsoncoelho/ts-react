import React from 'react';
import styled from 'styled-components';

interface BoxProps {
  children: React.ReactNode;
}

const Box = styled.div`
  background-color: ${(props) => props.theme.color.grayLighter};
  width: 622px;
  padding: 80px 100px;
`;

const Component = ({ children }: BoxProps) => {
  return <Box>{children}</Box>;
};

export default Component;
