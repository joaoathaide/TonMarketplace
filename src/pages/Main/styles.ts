import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;

  margin-top: 100px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999',
})`
  margin: 30px 0;
`;

export const ContainerList = styled.TouchableOpacity``;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
`;
