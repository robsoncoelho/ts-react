import React, { HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';
import { useForm } from '../../hooks/useForm';

interface ComponentProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

interface InputProps {
  error: boolean;
}

const InputComponent = styled.div`
  margin-bottom: 16px;
`;

const Input = styled.input<InputProps>`
  padding: 12px 16px;
  height: 48px;
  width: 100%;
  border-radius: 2px;
  border-style: solid;
  border-width: ${(props) => (props.error ? '2px' : '1px')};
  border-color: ${(props) =>
    props.error ? props.theme.color.red : props.theme.color.grayLight};
  color: ${(props) => props.theme.color.navy};
`;

const Label = styled.label`
  line-height: 24px;
  font-weight: 600;
  font-size: ${(props) => props.theme.font.size.regular};
  letter-spacing: -0.01em;
  color: ${(props) => props.theme.color.navy};
`;

const ErrorMessage = styled.p`
  font-family: ${(props) => props.theme.font.family.jetBrains};
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.01em;
  margin: 8px 0 0 0;
  color: ${(props) => props.theme.color.red};
`;

const Component = ({ label, name, type, placeholder }: ComponentProps) => {
  const { errors, fields, handleChange, resetError } = useForm();

  const error = errors && errors[name];

  return (
    <InputComponent>
      <Label htmlFor={name}>{label}</Label>
      <Input
        value={fields[name] as string | number}
        onChange={(e) => handleChange({ field: name, value: e.target.value })}
        onFocus={() => resetError(name)}
        error={Boolean(error)}
        name={name}
        placeholder={placeholder}
        type={type}
      />
      {Boolean(error) && error && <ErrorMessage>{error}</ErrorMessage>}
    </InputComponent>
  );
};

export default React.memo(Component);
