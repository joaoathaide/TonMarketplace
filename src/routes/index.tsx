import React from 'react';
import { View, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Main from '../pages/Main';
import Cart from '../pages/Cart';
import CartCompleted from '../pages/Cart/CartCompleted';
import Header from '../components/Header';

const Nav = createStackNavigator();

const StoreRoutes: React.FC = () => (
  <Nav.Navigator
    screenOptions={{
      headerShown: false,
      headerBackground: () => Platform.OS === 'android' ? <View style={{ height: 80, backgroundColor: "#3ECB87"}} /> : <></>,
      cardStyle: { backgroundColor: '#fff' }
    }}
    initialRouteName="Main"
    >
    <Nav.Screen
      options={{
        headerShown: true,
        headerTransparent: true,
        header: () => <View style={{ height: 80, backgroundColor: "#3ECB87"}}><Header /></View>,
      }}
      name="Main" component={Main} />
    <Nav.Screen
      options={{
        headerShown: true,
        headerTransparent: true,
        headerBackTitleStyle: { backgroundColor: '#3ECB87' },
        headerTitle: ' ',
        headerBackTitle: ' ',
        headerBackImage: () => (<Icon name="chevron-left" size={30} color="#fff" />),
        headerLeftContainerStyle: {
          height: 100,
          width: Platform.OS === 'android' ? 50 : 20
        },
      }}
      name="Cart" component={Cart} />
      <Nav.Screen
      options={{
        headerTitle: ' ',
        headerBackTitle: ' ',
        headerBackImage: () => (<></>),
        headerShown: true,
        headerTransparent: true,
      }}
      name="CartCompleted" component={CartCompleted} />
  </Nav.Navigator>
)

export default StoreRoutes;
