import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashTitle() {

  return (
  
  <Text style={styles.splashTitle}>the stephen kingdom</Text>
  );
}

const styles = StyleSheet.create({
  splashTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    textTransform: 'uppercase',
  }

});
