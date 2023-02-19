import styled from 'styled-components';
import Box from '../Box';
import Title from '../Title';
import Button from '../Button';
import Input from '../Input';
import Checkbox from '../Checkbox';

const Form = styled.form`
  margin-top: 32px;
`;

const SubmitButton = styled(Button)`
  margin-top: 16px;
`;

const Component = () => (
  <Box>
    <Title>Let’s sign you up for Timescale Cloud</Title>
    <Form>
      <Input
        error={false}
        placeholder='smith@smithandco.com'
        label='Email address'
        errorMessage='Invalid email'
      />

      <Input
        error={false}
        placeholder='16 characters or more...'
        label='Create password'
        errorMessage='Invalid password'
      />

      <Checkbox
        error={false}
        label='I agree to the Timecale Cloud Terms of Service'
        errorMessage='Required'
      />
      <SubmitButton onClick={() => null} variant='primary'>
        Sign up
      </SubmitButton>
    </Form>
  </Box>
);

export default Component;
