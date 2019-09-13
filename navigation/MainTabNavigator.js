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
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contrast' : 'md-contrast'} />
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
  tabBarLabel: 'the list',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-film' : 'md-film'} />
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
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-glasses' : 'md-glasses'} />
  ),
};

AboutStack.path = '';

const tabNavigator = createBottomTabNavigator({
  SplashStack,
  MovieInfoStack,
  AboutStack,
}, {
    tabBarOptions: {
      style: {
        backgroundColor: '#161717',
        height: 75,
        activeTintColor: 'black',
      },
      labelStyle: {
        fontSize: 18,
        textTransform: 'uppercase',
        fontFamily: 'texgyreadventor-bold',
        paddingBottom: 5,
        color: 'orange',
        opacity: .5,
      },
      
    }
  });

tabNavigator.path = '';

export default tabNavigator


