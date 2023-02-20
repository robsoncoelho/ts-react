import styled from 'styled-components';
import { useForm } from '../../hooks/useForm';

interface ComponentProps {
  label: string;
  name: string;
}
interface StyledCheckboxProps {
  error: boolean;
  checked: boolean;
}

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: ${(props) => props.theme.color.white};
  stroke-width: 3px;
`;

const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: inline-flex;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  margin-right: 16px;
  border-style: solid;
  border-width: ${(props) => (props.error ? '2px' : '1px')};
  border-color: ${(props) =>
    props.error ? props.theme.color.red : props.theme.color.grayLight};
  background: ${(props) =>
    props.checked ? props.theme.color.grayDark : props.theme.color.white};

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px ${(props) => props.theme.color.blue};
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

const CheckboxComponent = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  font-size: ${(props) => props.theme.font.size.small};
  color: ${(props) => props.theme.color.navy};
`;

const ErrorMessage = styled.p`
  flex-basis: 100%;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.01em;
  margin: 8px 0 0 0;
  font-family: ${(props) => props.theme.font.family.jetBrains};
  color: ${(props) => props.theme.color.red};
`;

const Component = ({ label, name }: ComponentProps) => {
  const { errors, fields, handleChange, resetError } = useForm();

  const error = errors && errors[name];

  return (
    <CheckboxComponent>
      <Label htmlFor={name}>
        <HiddenCheckbox
          onChange={(e) => {
            handleChange({ field: name, value: e.target.checked });
            resetError(name);
          }}
          checked={fields[name] as boolean}
          name={name}
          id={name}
        />

        <StyledCheckbox
          error={Boolean(error)}
          checked={fields[name] as boolean}>
          <Icon viewBox='0 0 24 24'>
            <polyline points='20 6 9 17 4 12' />
          </Icon>
        </StyledCheckbox>

        {label}
      </Label>

      {Boolean(error) && error && <ErrorMessage>{error}</ErrorMessage>}
    </CheckboxComponent>
  );
};

export default Component;
