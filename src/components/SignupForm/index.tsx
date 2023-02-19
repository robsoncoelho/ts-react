import styled from 'styled-components';
import Button from '../Button';
import Input from '../Input';
import Checkbox from '../Checkbox';
import { FieldValueProps } from '../../hooks/useForm/Types';
import FormProvider, { useForm } from '../../hooks/useForm';
import {
  emailValidation,
  passwordValidation,
  requiredValidation,
} from '../../utils/formValidation';

const Form = styled.form`
  margin-top: 32px;
`;

const SubmitButton = styled(Button)`
  margin-top: 16px;
`;

const initialValues = {
  email: '',
  password: '',
  terms: false,
};

const validate = {
  email: (value: FieldValueProps) => emailValidation(value as string),
  password: (value: FieldValueProps) => passwordValidation(value as string),
  terms: (value: FieldValueProps) => requiredValidation(value as boolean),
};

const FormComponent = () => {
  const { onSubmit } = useForm();

  return (
    <Form onSubmit={onSubmit}>
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
    </Form>
  );
};

const Component = () => {
  return (
    <FormProvider initialValues={initialValues} validate={validate}>
      <FormComponent />
    </FormProvider>
  );
};

export default Component;
