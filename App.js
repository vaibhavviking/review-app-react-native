import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Home from './screens/Home';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {AppNavigator} from './routes/homeStack';
import { DrawerNavigator } from './routes/drawer';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/font/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/font/Nunito-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded,setFOntsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <DrawerNavigator></DrawerNavigator>
    );
  }else{
    return(
      <AppLoading
      startAsync={getFonts}
      onFinish={() => setFOntsLoaded(true)} />
    );
  }
}

