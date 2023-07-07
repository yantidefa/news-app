import React, { useEffect } from "react";

import { NativeBaseProvider } from "native-base";

import SplashScreen from "react-native-splash-screen";
import MainContainer from "./navigation/MainContainer";
import LoginScreen from "./navigation/LoginScreen";
import DetailScreen from "./navigation/screens/DetailScreens";

function App() {
  useEffect(()=>{
    SplashScreen.hide();
  },[])
  return(
    <NativeBaseProvider>
      <MainContainer/>
    </NativeBaseProvider>
  );
}

export default App;