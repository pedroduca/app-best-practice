import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { EmprestimoTela } from '../../infra/interface';
import { ProfileScreenProps, RouteNames } from '../../navigation/INavigation';

type HomeProps = ProfileScreenProps<RouteNames.Home>;

// Com a tipagem feita no arquivo INavigation
// conseguimos acessar todas as props que definimos no HomeProps
export const Home = ({ navigation, route }: HomeProps): JSX.Element => {
  // dependendo da necessidade essa verificação pode ser utilizado um hook
  const [screen, setScreen] = useState(EmprestimoTela.Ativos);
  const [failure, setFailure] = useState(false);
  const [loading, setLoading] = useState(false);

  // caso faça comunicação com api chamamos o useSelector, por exemplo:
  // const screen = useSelector(EmprestimoTela)
  // utilizar um useEffect para disparar uma action e "preencher" nosso Store

  if (loading)
    return (
      <View>
        <Text>Componente de carregamento das informações</Text>
      </View>
    );

  if (failure)
    return (
      <View>
        <Text>Componente de falha</Text>
      </View>
    );

  return (
    <Container>
      {screen === EmprestimoTela.Ativos && (
        <View>
          <Text>Ativos</Text>
        </View>
      )}
      {screen === EmprestimoTela.Finalizados && (
        <View>
          <Text>Finalizados</Text>
        </View>
      )}
    </Container>
  );
};

// Se não tiver muito style, acredito que fica mais fácil de encontrar
// no mesmo arquivo, e não precisa criar arquivo apenas para style

const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  background: ${(p) => p.theme.colors.neutralColorWhite};
`;
