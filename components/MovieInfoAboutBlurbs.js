import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function movieInfoAboutBlurbs(props) {

  return (

    <View>
      <Image
        source={
          require('../assets/images/greengoblin.jpg')
        }
        style={styles.greenGoblinImage} />
      <View style={styles.infoBlurbs}>
        <Text style={styles.info}>
          {`
Ever wonder which Stephen King movies were actually written or directed by him or just based off his literature? `}</Text>
        <Text style={styles.info2}>{`
How about one that involved a lawsuit to get his name dissasociated with the project because it relates to a work of his in title only? `}</Text>
        <Text style={styles.info3}>{`
Click on the movie posters below to find out more info on each! `}</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  info: {
    color: 'white',
    textAlign: 'left',
    borderWidth: 1,
    paddingBottom: 10,
    paddingRight: 40,
    paddingLeft: 20,
    borderColor: '#212424',
    backgroundColor: '#212424',
    margin: 10,
    marginRight: 30,
    borderRadius: 2,
    fontFamily: 'texgyreadventor-bold',
    opacity: .7,
  },
  info2: {
    color: 'black',
    textAlign: 'right',
    borderWidth: 1,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 40,
    borderColor: 'lightgrey',
    backgroundColor: 'lightgrey',
    opacity: .7,
    marginLeft: 30,
    marginRight: 10,
    fontFamily: 'texgyreadventor-bold',
    borderRadius: 2,
    

  },
  info3: {
    color: 'white',
    textAlign: 'left',
    borderWidth: 1,
    paddingBottom: 10,
    paddingRight: 40,
    paddingLeft: 20,
    borderColor: '#212424',
    backgroundColor: '#212424',
    margin: 10,
    marginBottom: 20,
    borderRadius: 2,
    marginRight: 30,
    fontFamily: 'texgyreadventor-bold',
    opacity: .7,
  },
  

  infoBlurbs: {
    position: 'absolute',
  }
});