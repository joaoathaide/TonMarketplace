import styled from 'styled-components/native';

export const ProductContainer = styled.View`
  height: 170px;
  flex-direction: row;

  background: #fff;
  border-color: rgb(238, 238, 238);
  border-bottom-width: 2px;
`;

export const ProductList = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  padding: 15px 10px;
  border-radius: 5px;
  margin: 5px;
  flex-direction: row;

  position: relative;
`;

export const ProductImage = styled.Image`
  height: 160px;
  width: 142px;
  align-self: center;
`;

export const ProductTitleContainer = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
  max-width: 178px;
  color: #333;
`;

export const ProductDescription = styled(ProductTitle)`
  font-size: 13px;
  color: #777;
`;

export const ProductPriceContainer = styled.View`
  flex-direction: column;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductShippingContainer = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const ProductShipping = styled.Text`
  font-size: 14px;
  max-width: 200px;
  color: #3ECB87;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  max-width: 200px;
  font-weight: 500;
  margin-top: 5px;
  color: #333;
`;

export const ProductQuantity = styled.Text`
  margin-top: 5px;
  margin-right: 10px;

  font-size: 14px;
  color: #777;
`;

export const ActionContainer = styled.View`
  align-self: flex-end;
  align-items: center;
  justify-content: space-between;

  margin-left: auto;
`;

export const ActionButton = styled.TouchableOpacity`
  background: rgb(159, 223, 186);
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 5px;
`;
