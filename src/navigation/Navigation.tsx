import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';
import { Movie } from '../interfaces/MoviesInterface';


export type RootStackParamList = {
    HomeScreen: undefined;
    DetailScreen: Movie|undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
export function Navigation() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false,
        cardStyle:{
            backgroundColor:'white'
        }
    }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      
    </Stack.Navigator>
  );
}