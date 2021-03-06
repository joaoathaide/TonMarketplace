import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import Routes from './routes';
import AppContainer from './hooks';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return(
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#3ECB87' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <NavigationContainer>
            <StatusBar barStyle="light-content" />
          <AppContainer>
              <Routes />
          </AppContainer>
        </NavigationContainer>
      </SafeAreaView>
    </>
  )
};

export default App;
