import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';
import ThirdPage from './Pages/ThirdPage';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='FirstPage'
        screenOptions={{
          headerStyle: { backgroundColor: '#3226c2' },
          headerTintColor: '#ffff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      >
        <Stack.Screen name='FirstPage' component={FirstPage} />
        <Stack.Screen name='SecondPage' component={SecondPage} />
        <Stack.Screen name='ThirdPage' component={ThirdPage} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}