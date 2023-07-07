import React, {useEffect} from 'react';

import {NativeBaseProvider} from 'native-base';

import SplashScreen from 'react-native-splash-screen';
import MainContainer from './navigation/MainContainer';
import LoginScreen from './navigation/LoginScreen';
import DetailScreen from './navigation/screens/DetailScreens';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './navigation/Navigator';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Navigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;
