import React, { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useCart } from '../../hooks/cart';

import {
  Container,
  Logo,
  LogoImage,
  CartButton,
  ItemCount,
  ItemCountFrame
} from './styles';

const Header: React.FC = () => {
  const { cart } = useCart();

  const navigation = useNavigation();

  const totalItensInCart = useMemo(() => {
    const quantity = cart.reduce((accumulator, product) => {
      accumulator += 1 * product.quantity;

      return accumulator;
    }, 0);

    return quantity;
  }, [cart]);

  return (
    <Container>
      <Logo onPress={() => {}}>
        <LogoImage />
      </Logo>

      <CartButton onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-cart" size={28} color="#fff" />
        <ItemCountFrame>
          <ItemCount>{totalItensInCart}</ItemCount>
        </ItemCountFrame>
      </CartButton>
    </Container>
  );
}

export default Header;
