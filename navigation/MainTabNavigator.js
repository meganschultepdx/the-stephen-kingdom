import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import SplashScreen from '../screens/SplashScreen';
import MovieInfoScreen from '../screens/MovieInfoScreen';
import AboutScreen from '../screens/AboutScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const SplashStack = createStackNavigator(
  {
    Splash: SplashScreen,
  },
  config
);

SplashStack.navigationOptions = {
  tabBarLabel: 'Splash',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

SplashStack.path = '';

const MovieInfoStack = createStackNavigator(
  {
    MovieInfo: MovieInfoScreen,
  },
  config
);

MovieInfoStack.navigationOptions = {
  tabBarLabel: 'MovieInfo',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

MovieInfoStack.path = '';

const AboutStack = createStackNavigator(
  {
    About: AboutScreen,
  },
  config
);

AboutStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

AboutStack.path = '';

const tabNavigator = createBottomTabNavigator({
  SplashStack,
  MovieInfoStack,
  AboutStack,
});

tabNavigator.path = '';

export default tabNavigator;
