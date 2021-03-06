import React, { useMemo, useState, useCallback } from "react";

import { useCart } from '../../hooks/cart';
import ProductCart from "../../components/ProductCart";
import Header from '../../components/Header';
import { formatPrice } from '../../util/format';

import CartCompleted from '../../pages/Cart/CartCompleted';
import Button from '../../components/Button';

import {
  Container,
  ContainerList,
  List,
  TotalContainer,
  AddressContainer,
  TotalProductsContainer,
  Installments,
  Address,
  Free,
  TotalProductsText,
  SubtotalValue,
  EmptyCartContainer,
  EmptyCart,
  EmptyCartDescription
} from "./styles";

interface ProductRequest {
  id: string;
  title: string;
  description: string;
  image_url: string;
  singlePrice: number;
  quantity: number;
  productPrice: number;
  productShipping: string;
  removeCart: void;
}

const Cart: React.FC = ({ navigation }) => {
  const { cart, removeCart } = useCart();
  const [cartSuccesFinish, setCartSuccesFinish] = useState(false);

  const cartTotal = useMemo(() => {
    const quantity = cart.reduce((accumulator, product) => {
      accumulator += product.singlePrice * product.quantity;

      return accumulator;
    }, 0);

    return formatPrice(quantity);
  }, [cart]);

  const totalItensInCart = useMemo(() => {
    const quantity = cart.reduce((accumulator, product) => {
      accumulator += 1 * product.quantity;

      return accumulator;
    }, 0);

    return quantity;
  }, [cart]);

  const cartSuccess = useCallback(() => {
    setCartSuccesFinish(true);

    setTimeout(() => {
        navigation.navigate('Main');
    }, 2000);
  }, [])

  return (
    <Container>
      <Header />
      {cartSuccesFinish && <CartCompleted />}

      { totalItensInCart === 0 ? (
        <>
          <EmptyCartContainer>
            <EmptyCart>
              O seu carrinnho está vazio
            </EmptyCart>
            <EmptyCartDescription>
              Não sabe o que comprar?{"\n"}
              Milhares de produtos esperam por você!
            </EmptyCartDescription>
          </EmptyCartContainer>
        </>
      ) : (
        <>
          <List
            data={cart}
            keyExtractor={(item: ProductRequest) => String(item.id)}
            renderItem={({ item }: { item: ProductRequest }) => (
              <ContainerList>
                <ProductCart
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  image_url={item.image_url}
                  singlePrice={item.singlePrice}
                  quantity={item.quantity}
                  productPrice={item.productPrice}
                  productShipping={item.productShipping}
                />
              </ContainerList>
            )}
          />

          <TotalContainer>
            <AddressContainer>
              <Address>Envio: Edson da Silveira Campos 1600</Address>
              <Free>Grátis</Free>
            </AddressContainer>
            <TotalProductsContainer>
              <TotalProductsText>Total com frete</TotalProductsText>
              <SubtotalValue><Installments>12x</Installments>
                {cartTotal}</SubtotalValue>
            </TotalProductsContainer>
            <Button onPress={() => {
              removeCart(), cartSuccess() }}>
              Comprar agora</Button>
          </TotalContainer>
        </>
      )}
    </Container>
  );
};

export default Cart;
