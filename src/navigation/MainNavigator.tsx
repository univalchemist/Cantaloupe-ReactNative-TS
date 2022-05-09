import React from 'react';
import {
  WelcomeScreen,
  AuthOptionScreen,
  SignInScreen,
  DashboardScreen,
  CardsScreen,
} from '@screens/index';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabIcon} from '@components/BottomTabIcon';
import {
  CardIcon,
  HelpIcon,
  HistoryIcon,
  MapIcon,
  RewardIcon,
} from '@assets/icon';
import { COLORS } from '@theme/color';

export type MainStackParamList = {
  Welcome: undefined;
  AuthOption: undefined;
  Signin: undefined;
  Dashboard: undefined;
  BottomTabs: undefined;
};
export type BottomTabParamList = {
  Map: undefined;
  History: undefined;
  Cards: undefined;
  Rewards: undefined;
  Help: undefined;
};
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabs() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: COLORS.white,
        },
      }}>
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size, focused}) => (
            <BottomTabIcon Icon={MapIcon} label="Map" active={focused} />
          ),
        }}
        name="Map"
        component={CardsScreen}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size, focused}) => (
            <BottomTabIcon
              Icon={HistoryIcon}
              label="History"
              active={focused}
            />
          ),
        }}
        name="History"
        component={CardsScreen}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size, focused}) => (
            <BottomTabIcon Icon={CardIcon} label="Cards" active={focused} />
          ),
        }}
        name="Cards"
        component={CardsScreen}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size, focused}) => (
            <BottomTabIcon Icon={RewardIcon} label="Rewards" active={focused} />
          ),
        }}
        name="Rewards"
        component={CardsScreen}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size, focused}) => (
            <BottomTabIcon Icon={HelpIcon} label="Help" active={focused} />
          ),
        }}
        name="Help"
        component={CardsScreen}
      />
    </BottomTab.Navigator>
  );
}

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
export type SigninScreenProp = StackNavigationProp<
  MainStackParamList,
  'Signin'
>;
export type DashboardScreenProp = StackNavigationProp<
  MainStackParamList,
  'Dashboard'
>;
export type CardsScreenProp = StackNavigationProp<BottomTabParamList, 'Cards'>;
