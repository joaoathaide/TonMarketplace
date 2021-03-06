import styled from 'styled-components/native';
import { Platform } from 'react-native';
import logo from '../../assets/logo.png';

export const Container = styled.SafeAreaView.attrs({
  elevation: 2,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-top: 34px;
`;

export const Logo = styled.TouchableWithoutFeedback`
  width: 220px;
`;

export const LogoImage = styled.Image.attrs({
  source: logo,
  resizeMode: 'contain',
})`
  width: 225px;
  height: 35px;
  margin-left: 14px;
`;

export const CartButton = styled.TouchableOpacity`
  position: relative;
  padding: 0 30px;
`;

export const ItemCountFrame = styled.View`
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  right: 20px;
  top: -6px;

  background: rgb(12, 112, 14);
`;

export const ItemCount = styled.Text`
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  color: #fff;
`;
