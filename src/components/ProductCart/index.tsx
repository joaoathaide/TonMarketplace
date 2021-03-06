import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useCart } from '../../hooks/cart';
import { formatPrice } from '../../util/format';

import {
  ProductContainer,
  ProductList,
  Container,
  ProductImage,
  ProductTitleContainer,
  ProductTitle,
  ProductDescription,
  ProductPriceContainer,
  TotalContainer,
  ProductShippingContainer,
  ProductShipping,
  ProductPrice,
  ProductQuantity,
  ActionContainer,
  ActionButton,
} from './styles';

interface ProductData {
  id: string;
  title: string;
  description: string;
  image_url: string;
  singlePrice: number;
  quantity: number;
  productPrice: number;
  productShipping: string;
}

const ProductCard: React.FC<ProductData> = (
  {
    id,
    title,
    description,
    image_url,
    singlePrice,
    quantity,
    productPrice,
    productShipping
  }) => {
  const { increment, decrement } = useCart();

  function handleIncrement(id: string): void {
    increment(id);
  }

  function handleDecrement(id: string): void {
    decrement(id);
  }

  return (
    <ProductContainer>
      <ProductList>
          <Container>
            <ProductImage source={{ uri: image_url }} />
            <ProductTitleContainer>
              <ProductTitle>{title}</ProductTitle>
              <ProductPriceContainer>
                <ProductShippingContainer>
                  <ProductDescription>
                    {description}
                  </ProductDescription>
                </ProductShippingContainer>

                <ProductShippingContainer>
                  <ProductShipping>
                    {productShipping}
                  </ProductShipping>
                </ProductShippingContainer>

                <TotalContainer>
                  <ProductQuantity>Qtd: {quantity}</ProductQuantity>

                  <ProductPrice>
                    {formatPrice(singlePrice * quantity)}
                  </ProductPrice>
                </TotalContainer>


              </ProductPriceContainer>
            </ProductTitleContainer>
            <ActionContainer>
              <ActionButton onPress={() => handleIncrement(id)}>
                <Icon name="add" color="#fff" size={16} />
              </ActionButton>

              <ActionButton onPress={() => handleDecrement(id)}>
                <Icon name="remove" color="#fff" size={16} />
              </ActionButton>
            </ActionContainer>
          </Container>
      </ProductList>
    </ProductContainer>
  );
}

export default ProductCard;
