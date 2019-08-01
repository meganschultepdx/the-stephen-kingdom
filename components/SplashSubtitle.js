import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FadeInView from './FadeInView'

export default function SplashSubtitle() {

  return (
  
  <FadeInView>
  <Text style={styles.splashSubtitle}> for all related</Text>
  <Text style={styles.splashSubtitle2}>movies & mini-series </Text>
  </FadeInView>
  );
}

const styles = StyleSheet.create({
  splashSubtitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    textTransform: 'uppercase',
    paddingTop: 35,
    fontFamily: 'texgyreadventor-bold',
    color: 'grey'
  },
  splashSubtitle2: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    textTransform: 'uppercase',
    fontFamily: 'texgyreadventor-bold',
    color: 'grey'
  }
});
