import styled from 'styled-components';
import logo from '../images/logo.svg';
import SignupForm from './SignupForm';

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
      <SignupForm />
    </Content>
  </div>
);

export default Component;
