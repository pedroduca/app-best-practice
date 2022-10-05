import React from 'react';
import styled from 'styled-components/native';
import { H3, BodyLight } from '../../styles/Typography';

export const HomeHeader = (): JSX.Element => {
  return (
    <Body>
      <Title>Acompanhe suas contratações</Title>
      <BodyLight>
        Escolha entre empréstimos ativos ou finalizados e selecione a
        contratação que você deseja conferir mais detalhes.
      </BodyLight>
    </Body>
  );
};

const Body = styled.View`
  padding: 16px;
  width: 100%;
`;
const Title = styled(H3)`
  margin-bottom: 16px;
`;
