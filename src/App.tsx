import { registerRootComponent } from 'expo';
import { INavigationProps } from './navigation/INavigation';
import { Navigation } from './navigation/Navigation';
import { Theme } from './styles/Theme';

export interface IAppProps {
  app: INavigationProps;
}
const App = ({ app }: IAppProps): JSX.Element => {
  return (
    <Theme>
      <Navigation {...app} />
    </Theme>
  );
};

export default registerRootComponent(App);
