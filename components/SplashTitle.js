import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import FadeInView from './FadeInView'

export default class SplashTitle extends React.Component {
  render() {

    return (

      <FadeInView>
        <Text style={styles.titleThe}>the</Text>
        <Text style={styles.titleStephen}>stephen</Text>
        <Text style={styles.titleKingdom}>kingdom</Text>
      </FadeInView>
    )
  }
}

const styles = StyleSheet.create({
  titleThe: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    textTransform: 'uppercase',
    fontFamily: 'eighties-horror',
  },
  titleStephen: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    textTransform: 'uppercase',
    fontFamily: 'eighties-horror',
    marginTop: -18,
  },
  titleKingdom: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    textTransform: 'uppercase',
    fontFamily: 'eighties-horror',
    marginTop: -18,
  }


});
