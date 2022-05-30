import React from 'react';
import {
  WelcomeScreen,
  AuthOptionScreen,
  LoginScreen,
  SignInScreen,
  DashboardScreen,
  CardsScreen,
  CardDetailScreen,
  ReloadCardScreen,
  ReloadCardScreen2,
  MapScreen,
  AddCardsScreen
} from '@screens/index';
import {
  createStackNavigator,
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabIcon } from '@components/BottomTabIcon';
import {
  CardIcon,
  HelpIcon,
  HistoryIcon,
  MapIcon,
  RewardIcon,
} from '@assets/icon';
import { COLORS } from '@theme/color';
import { PaymentMethod } from '@models/PaymentMethod';

export type MainStackParamList = {
  Welcome: undefined;
  AuthOption: undefined;
  Login: undefined;
  Signin: undefined;
  Dashboard: undefined;
  BottomTabs: undefined;
  MapScreen: undefined
};

export type CardScreensParamList = {
  Cards: undefined;
  CardDetail: { card: PaymentMethod };
  ReloadCard: undefined;
  ReloadCard2: undefined;
  MapScreen: undefined;
  AddCards: undefined;
};

export type BottomTabParamList = {
  Map: undefined;
  History: undefined;
  Rewards: undefined;
  Help: undefined;
  CardScreenNavigator1: undefined;
  CardScreenNavigator2: undefined;
  CardScreenNavigator3: undefined;
  CardScreenNavigator4: undefined;
  CardScreenNavigator5: undefined;
};

export type AddCardsScreenParamList = {
  AddCards: undefined
}
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabs() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: COLORS.white,
          backgroundColor: COLORS.white,
          height: 80,
        },
      }}>
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <BottomTabIcon Icon={MapIcon} label="Map" active={focused} />
          ),
        }}
        name="CardScreenNavigator1"
        component={AddCardsScreen}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <BottomTabIcon
              Icon={HistoryIcon}
              label="History"
              active={focused}
            />
          ),
        }}
        name="CardScreenNavigator2"
        component={CardScreenNavigator}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <BottomTabIcon Icon={CardIcon} label="Cards" active={focused} />
          ),
        }}
        name="CardScreenNavigator3"
        component={CardScreenNavigator}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <BottomTabIcon Icon={RewardIcon} label="Rewards" active={focused} />
          ),
        }}
        name="CardScreenNavigator4"
        component={CardScreenNavigator}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <BottomTabIcon Icon={HelpIcon} label="Help" active={focused} />
          ),
        }}
        name="CardScreenNavigator5"
        component={CardScreenNavigator}
      />
    </BottomTab.Navigator>
  );
}

const CardScreenStack = createStackNavigator<CardScreensParamList>();
const CardScreenNavigator = () => {
  return (
    <CardScreenStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <CardScreenStack.Screen name="Cards" component={CardsScreen} />
      <CardScreenStack.Screen name="CardDetail" component={CardDetailScreen} />
      <CardScreenStack.Screen name="ReloadCard" component={ReloadCardScreen} />
      <CardScreenStack.Screen name="MapScreen" component={MapScreen} />
      <CardScreenStack.Screen name="AddCards" component={AddCardsScreen} />
      <CardScreenStack.Screen
        name="ReloadCard2"
        component={ReloadCardScreen2}
      />
    </CardScreenStack.Navigator>
  );
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
        <Stack.Screen name="MapScreen" component={MapScreen} />
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
export type CardsScreenProp = StackNavigationProp<
  CardScreensParamList,
  'Cards'
>;
export type CardDetailsScreenProp = StackScreenProps<
  CardScreensParamList,
  'CardDetail'
>;
export type ReloadCardScreenProp = StackNavigationProp<
  CardScreensParamList,
  'ReloadCard'
>;
export type ReloadCardScreenProp2 = StackNavigationProp<
  CardScreensParamList,
  'ReloadCard2'
>;
export type MapScreenScreenProp = StackNavigationProp<
  CardScreensParamList,
  'MapScreen'
>;
export type AddCardsScreenProp = StackNavigationProp<
  CardScreensParamList,
  'AddCards'
>;
