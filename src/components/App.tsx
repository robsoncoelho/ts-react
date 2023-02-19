import styled from 'styled-components';
import logo from '../images/logo.svg';
import SignupForm from './SignupForm';
import Title from './Title';
import Box from './Box';

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Component = () => (
  <div>
    <img src={logo} alt='Timescale' />
    <Content>
      <Box>
        <Title>Let’s sign you up for Timescale Cloud</Title>
        <SignupForm />
      </Box>
    </Content>
  </div>
);

export default Component;
