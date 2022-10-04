import { ParamListBase } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

export enum RouteNames {
  Home = 'Home',
}

export interface INavigationProps {
  path: RouteNames;
}

// Tipando navegação, undefined significa que tela não tem parametros
// https://reactnavigation.org/docs/typescript#type-checking-the-navigator
// Isso permite acessar os parametros da tela durante o desenvolvimento
export interface NavigationParamList extends ParamListBase {
  Home: undefined;
}

export type ProfileScreenProps<RouteName extends keyof NavigationParamList> =
  StackScreenProps<NavigationParamList, RouteName>;
