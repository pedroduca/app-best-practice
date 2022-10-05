import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { HomeItem } from './HomeItem';
import { IItem } from '../../infra/interface';

export interface IActiveHome {
  data: IItem[];
}

export const HomeList = ({ data }: IActiveHome): JSX.Element => {
  const renderItem = ({ item }: { item: IItem }) => <HomeItem data={item} />;

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding-horizontal: 16px;
`;
