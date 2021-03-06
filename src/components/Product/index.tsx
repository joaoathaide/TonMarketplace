import React from 'react';

import { formatPrice } from '../../util/format';
import Button from '../../components/Button';

import {
  ProductContainer,
  ProductList,
  Container,
  ProductImage,
  ProductTitleContainer,
  ProductTitle,
  ProductPriceContainer,
  ProductSinglePrice,
  TotalContainer,
  ProductShippingContainer,
  ProductShipping,
  ProductPrice,
  ProductQuantity,
  ButtonContainer
} from './styles';

interface ProductData {
  title: string;
  image_url: string;
  singlePrice: number;
  quantity: number;
  productPrice: number;
  productShipping: string;
  addToCart(): void;
}

const Product: React.FC<ProductData> = (
  {
    title,
    image_url,
    singlePrice,
    quantity,
    productPrice,
    productShipping,
    addToCart
  }) => {
  return (
    <ProductContainer>
      <ProductList>
          <Container>
            <ProductImage source={{ uri: image_url }} />
            <ProductTitleContainer>
              <ProductTitle>{title}</ProductTitle>
              <ProductPriceContainer>
                <ProductSinglePrice>
                  {formatPrice(singlePrice)}
                </ProductSinglePrice>

                <TotalContainer>
                  <ProductQuantity>{quantity} x</ProductQuantity>

                  <ProductPrice>
                    {formatPrice(productPrice)} <ProductShipping>sem juros</ProductShipping>
                  </ProductPrice>
                </TotalContainer>

                <ProductShippingContainer>
                  <ProductShipping>
                    {productShipping}
                  </ProductShipping>
                </ProductShippingContainer>
              </ProductPriceContainer>
              <ButtonContainer>
                <Button onPress={addToCart}>Adicionar</Button>
              </ButtonContainer>
            </ProductTitleContainer>
          </Container>
      </ProductList>
    </ProductContainer>
  );
}

export default Product;
