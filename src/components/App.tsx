import styled from 'styled-components';
import logo from '../images/logo.svg';
import SignupForm from './SignupForm';
import SignupSuccess from './SignupSuccess';
import Box from './Box';
import { useState } from 'react';

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Component = () => {
  const [success, setSuccess] = useState<boolean>();

  return (
    <div>
      <img src={logo} alt='Timescale' />
      <Content>
        <Box>
          {!success ? (
            <SignupForm onSubmitCallback={() => setSuccess(true)} />
          ) : (
            <SignupSuccess />
          )}
        </Box>
      </Content>
    </div>
  );
};

export default Component;
