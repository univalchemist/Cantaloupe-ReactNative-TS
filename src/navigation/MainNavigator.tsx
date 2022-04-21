import React from 'react';
import { WelcomeScreen, AuthOptionScreen } from '@screens/index';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

export type MainStackParamList = {
  Welcome: undefined;
  AuthOption: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="AuthOption" component={AuthOptionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

export type WelcomeScreenProp = StackNavigationProp<
  MainStackParamList,
  'Welcome'
>;
export type AuthOptionScreenProp = StackNavigationProp<
  MainStackParamList,
  'AuthOption'
>;