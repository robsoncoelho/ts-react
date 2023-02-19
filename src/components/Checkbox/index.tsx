import styled from 'styled-components';
import { useForm } from '../../hooks/useForm';

interface ComponentProps {
  label: string;
  name: string;
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

const Component = ({ label, name }: ComponentProps) => {
  const { errors, fields, handleChange, resetError } = useForm();

  const error = errors && errors[name];

  return (
    <InputComponent>
      <Checkbox
        error={Boolean(error)}
        type='checkbox'
        name={name}
        checked={fields[name] as boolean}
        id={name}
        onChange={(e) => {
          handleChange({ field: name, value: e.target.checked });
          resetError(name);
        }}
      />
      <Label htmlFor={name}>{label}</Label>
      {Boolean(error) && error && <ErrorMessage>{error}</ErrorMessage>}
    </InputComponent>
  );
};

export default Component;
