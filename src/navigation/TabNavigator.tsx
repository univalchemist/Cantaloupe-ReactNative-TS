import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';
import {
  CardsScreen,
  CardDetailScreen,
  ReloadCardScreen,
  ReloadCardScreen2,
  MapScreen,
  HelpScreen,
  AddCardScreen,
  AutoReloadScreen1,
  AutoReloadScreen2,
  AutoReloadScreen3,
} from '@screens/index';
import {BottomTabIcon} from '@components/BottomTabIcon';
import {
  CardIcon,
  HelpIcon,
  HistoryIcon,
  MapIcon,
  RewardIcon,
} from '@assets/icon';
import {COLORS} from '@theme/color';
import {PaymentMethod} from '@models/PaymentMethod';

export type CardScreensParamList = {
  Cards: undefined;
  CardDetail: {card: PaymentMethod};
  ReloadCard: undefined;
  ReloadCard2: undefined;
  MapScreen: undefined;
  Help: undefined;
  AddCard: undefined;
  AutoReload1: undefined;
  AutoReload2: undefined;
  AutoReload3: undefined;
};

export type BottomTabParamList = {
  Map: undefined;
  History: undefined;
  Rewards: undefined;
  Help: undefined;
  MapTabNavigator: undefined;
  HistoryTabNavigator: undefined;
  CardScreenNavigator: undefined;
  RewardTabNavigator: undefined;
  HelpTabNavigator: undefined;
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
      }}
      initialRouteName="CardScreenNavigator">
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <BottomTabIcon Icon={MapIcon} label="Map" active={focused} />
          ),
        }}
        name="MapTabNavigator"
        component={MapScreen}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <BottomTabIcon
              Icon={HistoryIcon}
              label="History"
              active={focused}
            />
          ),
        }}
        name="HistoryTabNavigator"
        component={CardScreenNavigator}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <BottomTabIcon Icon={CardIcon} label="Cards" active={focused} />
          ),
        }}
        name="CardScreenNavigator"
        component={CardScreenNavigator}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <BottomTabIcon Icon={RewardIcon} label="Rewards" active={focused} />
          ),
        }}
        name="RewardTabNavigator"
        component={CardScreenNavigator}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <BottomTabIcon Icon={HelpIcon} label="Help" active={focused} />
          ),
        }}
        name="HelpTabNavigator"
        component={HelpScreen}
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
      <CardScreenStack.Screen name="Help" component={HelpScreen} />
      <CardScreenStack.Screen name="AddCard" component={AddCardScreen} />
      <CardScreenStack.Screen
        name="AutoReload1"
        component={AutoReloadScreen1}
      />
      <CardScreenStack.Screen
        name="AutoReload2"
        component={AutoReloadScreen2}
      />
      <CardScreenStack.Screen
        name="AutoReload3"
        component={AutoReloadScreen3}
      />

      <CardScreenStack.Screen
        name="ReloadCard2"
        component={ReloadCardScreen2}
      />
    </CardScreenStack.Navigator>
  );
};

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
export type AddCardScreenProp = StackNavigationProp<
  CardScreensParamList,
  'AddCard'
>;
export type AutoReload1Props = StackNavigationProp<
  CardScreensParamList,
  'AutoReload1'
>;
export type AutoReload2Props = StackNavigationProp<
  CardScreensParamList,
  'AutoReload2'
>;
export type AutoReload3Props = StackNavigationProp<
  CardScreensParamList,
  'AutoReload3'
>;

export default BottomTabs;
