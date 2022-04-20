import React from 'react';
import {WelcomeScreen} from '..//screens';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

export type MainStackParamList = {
  Welcome: undefined;
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

export type WelcomeScreenProp = StackNavigationProp<
  MainStackParamList,
  'Welcome'
>;
