import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Views from '../views';
import {
  INavigationProps,
  NavigationParamList,
  RouteNames,
} from './INavigation';

const Stack = createStackNavigator<NavigationParamList>();

export const Navigation = ({ path }: INavigationProps): JSX.Element => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={RouteNames.Home}>
      {/* Aqui é interessante ter um arquivo de tipagem
      com as rotas com de preferencia usando o mesmo
       nome da view, para facilitar no dia a dia */}
      <Stack.Screen name={RouteNames.Home} component={Views.Home} />
    </Stack.Navigator>
  </NavigationContainer>
);
