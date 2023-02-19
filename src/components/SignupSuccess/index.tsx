import styled from 'styled-components';
import car from '../../images/eon-car.svg';
import check from '../../images/check.svg';
import Title from '../Title';

const Subtitle = styled.p`
  line-height: 24px;
  font-size: ${(props) => props.theme.font.size.medium};
  margin: 0;
`;

const Content = styled.div`
  text-align: center;
`;

const Car = styled.img`
  margin-top: 26px;
`;

const Check = styled.img`
  margin-bottom: 26px;
`;

const Component = () => {
  return (
    <Content>
      <Check src={check} alt='Check image' />
      <Title>Thank you!</Title>
      <Subtitle>Please check your email.</Subtitle>
      <Car src={car} alt='Car image' />
    </Content>
  );
};

export default Component;
