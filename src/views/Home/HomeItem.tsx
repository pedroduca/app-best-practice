import styled from 'styled-components/native';
import ArrowLeft from '../../assets/arrowleft.svg';
import SuccessCheckIcon from '../../assets/successcheck.svg';
import AlertDangerIcon from '../../assets/alertdanger.svg';
import { EmprestimoStatus, IItem } from '../../infra/interface';
import { BodyLight, BodyRegular, H3 } from '../../styles/Typography';

export interface IHomeItemProps {
  data: IItem;
}

export const HomeItem = ({ data }: IHomeItemProps): JSX.Element => {
  console.log(data.status);

  return (
    <Container>
      <Header>
        <Title>{data.title}</Title>
        <ArrowLeft />
      </Header>
      <Body>
        <Text>{data.date}</Text>
        <Money>{data.value}</Money>
      </Body>
      {data.status === EmprestimoStatus.Aprovado ? (
        <Footer>
          <StyledSuccessCheckIcon />
          <Text>Contratação aprovada</Text>
        </Footer>
      ) : data.status === EmprestimoStatus.PropostaAprovada ? (
        <Footer>
          <StyledSuccessCheckIcon />
          <Text>Proposta aprovada</Text>
        </Footer>
      ) : (
        <Footer>
          <StyledAlertDangerIcon />
          <Text>Proposta cancelada</Text>
        </Footer>
      )}
    </Container>
  );
};
const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: column;
  margin-top: 24px;
`;

const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Body = styled.View`
  flex-direction: column;
  width: 100%;
  height: 45px;
  justify-content: space-between;
  margin-top: 8px;
`;

const Footer = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  border-color: '#BBC8CE';
  border-bottom-width: 1px;
  padding-vertical: 17px;
`;

const Title = styled(H3)`
  font-size: 16px;
  color: '#222';
`;
const Money = styled(BodyLight)`
  font-size: 14px;
  color: '#222';
`;

const Text = styled(BodyRegular)`
  font-size: 14px;
  color: '#222';
`;

const StyledSuccessCheckIcon = styled(SuccessCheckIcon)`
  margin-right: 10px;
`;

const StyledAlertDangerIcon = styled(AlertDangerIcon)`
  margin-right: 10px;
`;
