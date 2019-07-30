import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashSubtitle() {

  return (
  
  <View>
  <Text style={styles.splashSubtitle}> for all related</Text>
  <Text style={styles.splashSubtitle2}>movies & mini-series </Text>
  </View>
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
