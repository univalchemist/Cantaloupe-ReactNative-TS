import React from 'react';
import {
  WelcomeScreen,
  AuthOptionScreen,
  SignInScreen,
  DashboardScreen,
  CardsScreen,
  CardDetailScreen,
  ReloadCardScreen,
  ReloadCardScreen2,
  MapScreen
  
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
import {COLORS} from '@theme/color';

export type MainStackParamList = {
  Welcome: undefined;
  AuthOption: undefined;
  Signin: undefined;
  Dashboard: undefined;
  BottomTabs: undefined;
};

export type CardScreensParamList = {
  Cards: undefined;
  CardDetail: undefined;
  ReloadCard: undefined;
  ReloadCard2: undefined;
  MapScreen: undefined;
};

export type MapScreenParamList = {

  MapScreenP: undefined;
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
          tabBarIcon: ({color, size, focused}) => (
            <BottomTabIcon Icon={MapIcon} label="Map" active={focused} />
          ),
        }}
        name="CardScreenNavigator1"
        component={CardScreenNavigator}
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
        name="CardScreenNavigator2"
        component={CardScreenNavigator}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size, focused}) => (
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
          tabBarIcon: ({color, size, focused}) => (
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
          tabBarIcon: ({color, size, focused}) => (
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
      // initialRouteName="Cards"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <CardScreenStack.Screen name="Cards" component={CardsScreen} />
      <CardScreenStack.Screen name="CardDetail" component={CardDetailScreen} />
      <CardScreenStack.Screen name="ReloadCard" component={ReloadCardScreen} />
      <CardScreenStack.Screen name="ReloadCard2" component={ReloadCardScreen2}/>
       <CardScreenStack.Screen name="MapScreen" component={MapScreen}/>


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
export type CardsScreenProp = StackNavigationProp<
  CardScreensParamList,
  'Cards'
>;
export type CardDetailsScreenProp = StackNavigationProp<
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
