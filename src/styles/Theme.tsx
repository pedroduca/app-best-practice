import { ThemeProvider } from 'styled-components/native';
import { colors } from './colors';

export const theme = {
  colors: colors,
};

export type ITheme = typeof theme;

declare module 'styled-components/native' {
  interface DefaultTheme extends ITheme {}
}

interface IThemeProps {
  children: JSX.Element;
}

export const Theme = ({ children }: IThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
