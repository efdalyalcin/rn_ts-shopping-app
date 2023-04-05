import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home/Home';
import { colorStyles } from 'src/styles/colors';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: colorStyles.main,
          headerStyle: {
            backgroundColor: colorStyles.background,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'ShopEase',
            headerTitleStyle: { fontSize: 30 },
          }}
        />
        {/* <Stack.Screen name="Players" component={Players} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
