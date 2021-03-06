import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const EmptyCartContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;

  margin-top: 60px;
`;

export const EmptyCart = styled.Text`
  font-size: 22px;
  color: #333;
  font-weight: 300;
  text-align: center;
`;

export const EmptyCartDescription = styled.Text`
  margin-top: 24px;
  font-size: 18px;
  color: #777;
  font-weight: 300;
  text-align: center;
`;

export const ContainerList = styled.TouchableOpacity``;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
`;

export const TotalContainer = styled.View`
  height: 26%;
  padding: 0 20px;
`;

export const TotalProductsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 8px;
`;

export const AddressContainer = styled(TotalProductsContainer)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 20px 0;
  margin-bottom: 8px;
  border-color: rgb(238, 238, 238);
  border-bottom-width: 2px;
`;

export const Address = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
  color: #3ECB87;
  font-weight: 300;
  max-width: 260px;
`;

export const Free = styled.Text`
  font-size: 18px;
  color: #3ECB87;
  font-weight: 400;
`;

export const Installments = styled(Free)`
  font-size: 14px;
  color: #3ECB87;
  font-weight: 600;
  margin-right: 8px;
`;

export const TotalProductsText = styled.Text`
  font-size: 18px;
  color: #333;
  font-weight: 400;
`;

export const SubtotalValue = styled.Text`
  font-size: 18px;
  color: #333;
  font-weight: 600;
`;
