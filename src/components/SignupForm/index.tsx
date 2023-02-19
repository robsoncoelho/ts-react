import styled from 'styled-components';
import Button from '../Button';
import Input from '../Input';
import Checkbox from '../Checkbox';
import { FieldValueProps } from '../../hooks/useForm/Types';
import FormProvider from '../../hooks/useForm';
import {
  emailValidation,
  passwordValidation,
  requiredValidation,
} from '../../utils/formValidation';
import Title from '../Title';

const SubmitButton = styled(Button)`
  margin-top: 16px;
`;

const FormTitle = styled(Title)`
  margin-bottom: 32px;
`;

const initialValues = {
  email: '',
  password: '',
  terms: false,
};

interface SignupFormProps {
  onSubmitCallback: () => void;
}

const validate = {
  email: (value: FieldValueProps) => emailValidation(value as string),
  password: (value: FieldValueProps) => passwordValidation(value as string),
  terms: (value: FieldValueProps) => requiredValidation(value as boolean),
};

const Component = ({ onSubmitCallback }: SignupFormProps) => {
  const onSubmit = () => {
    onSubmitCallback();
  };

  return (
    <>
      <FormTitle>Let’s sign you up for Timescale Cloud</FormTitle>

      <FormProvider
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}>
        <Input
          name='email'
          placeholder='smith@smithandco.com'
          label='Email address'
        />
        <Input
          name='password'
          type='password'
          placeholder='16 characters or more...'
          label='Create password'
        />
        <Checkbox
          name='terms'
          label='I agree to the Timecale Cloud Terms of Service'
        />
        <SubmitButton type='submit' variant='primary'>
          Sign up
        </SubmitButton>
      </FormProvider>
    </>
  );
};

export default Component;
