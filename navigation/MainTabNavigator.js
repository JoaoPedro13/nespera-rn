import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';

import NesperasScreen from '../screens/user/NesperasScreen';
import MyNesperasScreen from '../screens/user/MyNesperasScreen';
import ProfileScreen from '../screens/user/ProfileScreen';
import SingleNesperaScreen from "../screens/nespera/SingleNesperaScreen"
import StatsScreen from "../screens/nespera/StatsScreen";

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const NesperasStack = createStackNavigator(
  {
    Nesperas: NesperasScreen,
    Single: SingleNesperaScreen,
    Stats: StatsScreen
  },
  config
);

NesperasStack.navigationOptions = {
  tabBarLabel: 'Nêsperas',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-globe${focused ? '' : '-outline'}`
          : 'md-globe'
      }
    />
  ),
};

NesperasStack.path = '';

const MyNesperasStack = createStackNavigator(
  {
    MyNesperas: MyNesperasScreen,
  },
  config
);

MyNesperasStack.navigationOptions = {
  tabBarLabel: 'As Minhas',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-shirt' : 'md-shirt'} />
  ),
};

MyNesperasStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'} />
  ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  NesperasStack,
  MyNesperasStack,
  ProfileStack,
});

tabNavigator.path = '';

export default tabNavigator;
