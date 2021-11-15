import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import 'react-native-gesture-handler';
import FadeScreen from './src/screens/FadeScreen';
import { GradientProvider } from './src/api/context/GradientContent';

const AppState = ({ children }: any) => {
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
        {/* <FadeScreen/> */}
      </AppState>

    </NavigationContainer>

  )
}

export default App
