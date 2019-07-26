import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashSubtitle() {

  return (
  
  <Text style={styles.splashSubtitle}>{`- for all related 

  movies & mini-series -`}</Text>
  );
}

const styles = StyleSheet.create({
  splashSubtitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    textTransform: 'uppercase',
    paddingTop: 40,
  }


});
