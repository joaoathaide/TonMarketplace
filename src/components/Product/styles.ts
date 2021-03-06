import styled from 'styled-components/native';

export const ProductContainer = styled.View`
  height: 220px;
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
  color: #777;
`;

export const ProductPriceContainer = styled.View`
  flex-direction: column;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  margin-top: 8px;
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

export const ProductSinglePrice = styled.Text`
  font-size: 22px;
  max-width: 200px;
  font-weight: 500;
  margin-top: 8px;
  color: #333;
`;

export const ProductPrice = styled.Text`
  margin-top: 5px;

  font-size: 14px;
  color: #777;
`;

export const ProductQuantity = styled.Text`
  margin-top: 5px;
  margin-right: 10px;

  font-size: 14px;
  color: #777;
`;

export const ButtonContainer = styled.View`
`;
