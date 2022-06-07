import React from 'react';
import {
  WelcomeScreen,
  AuthOptionScreen,
  LoginScreen,
  SignInScreen,
  DashboardScreen,
} from '@screens/index';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './TabNavigator';

export type MainStackParamList = {
  Welcome: undefined;
  AuthOption: undefined;
  Login: undefined;
  Signin: undefined;
  Dashboard: undefined;
  BottomTabs: undefined;
  MapScreen: undefined;
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
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AuthOption" component={AuthOptionScreen} />
        <Stack.Screen name="Signin" component={SignInScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
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
export type LoginScreenProp = StackNavigationProp<MainStackParamList, 'Login'>;
export type SigninScreenProp = StackNavigationProp<
  MainStackParamList,
  'Signin'
>;
export type DashboardScreenProp = StackNavigationProp<
  MainStackParamList,
  'Dashboard'
>;
