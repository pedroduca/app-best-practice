import styled from 'styled-components/native';
import colors from './colors';

export const TextBase = styled.Text`
  color: colors;
  font-weight: 400;
`;

export const BodyRegular = styled(TextBase)`
  font-size: 16px;
  line-height: 24px;
`;

export const BodyLight = styled(BodyRegular)`
  font-weight: 300;
`;

export const H3 = styled(TextBase)`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
`;
