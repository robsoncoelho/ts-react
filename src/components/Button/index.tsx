import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  variant: 'primary' | 'secondary';
}

const variants = {
  primary: css`
    background-color: ${(props) => props.theme.color.gold};
    color: ${(props) => props.theme.color.navy};
    &:hover {
      background-color: ${(props) => props.theme.color.goldLight};
    }
  `,
  secondary: css`
    background-color: ${(props) => props.theme.color.blue};
    color: ${(props) => props.theme.color.white};
    &:hover {
      background-color: ${(props) => props.theme.color.blueLight};
    }
  `,
};

const Button = styled.button<ButtonProps>`
  min-height: 40px;
  width: 100%;
  text-align: center;
  border: none;
  font-weight: 700;
  cursor: pointer;
  font-size: ${(props) => props.theme.font.size.regular};
  ${({ variant }) => variants[variant]}
`;

const Component = ({
  children,
  type = 'button',
  onClick,
  variant,
  className,
}: ButtonProps) => {
  return (
    <Button
      type={type}
      variant={variant}
      className={className}
      onClick={onClick}>
      {children}
    </Button>
  );
};

export default Component;
