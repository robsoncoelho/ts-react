import { HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';

interface ComponentProps {
  label: string;
  name?: string;
  error: boolean;
  errorMessage?: string;
}

interface CheckboxProps {
  error: boolean;
}

const InputComponent = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Checkbox = styled.input<CheckboxProps>`
  appearance: none;
  height: 16px;
  width: 16px;
  border-radius: 2px;
  border-style: solid;
  margin: 0;
  border-width: ${(props) => (props.error ? '2px' : '1px')};
  border-color: ${(props) =>
    props.error ? props.theme.color.red : props.theme.color.grayLight};
  color: ${(props) => props.theme.color.navy};
`;

const Label = styled.label`
  line-height: 24px;
  font-size: ${(props) => props.theme.font.size.small};
  letter-spacing: -0.01em;
  margin-left: 16px;
  color: ${(props) => props.theme.color.navy};
`;

const ErrorMessage = styled.p`
  flex-basis: 100%;
  font-family: ${(props) => props.theme.font.family.jetBrains};
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.01em;
  margin: 8px 0 0 0;
  color: ${(props) => props.theme.color.red};
`;

const Component = ({ label, name, error, errorMessage }: ComponentProps) => {
  return (
    <InputComponent>
      <Checkbox error={error} name={name} type='checkbox' />
      <Label htmlFor={name}>{label}</Label>
      {error && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputComponent>
  );
};

export default Component;
