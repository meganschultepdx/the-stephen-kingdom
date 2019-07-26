import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';

import { MonoText } from '../components/StyledText';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;


export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.splashContainer}>
          <Image
            source={
                require('../assets/images/Stephen-King-cropped.png')
            }
            style={styles.splashImage}/>
        </View>

      
      </ScrollView>

    </View>
  );
}

SplashScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  
  contentContainer: {
   
  },
  splashContainer: {
    alignItems: 'center',
    
    marginBottom: 20,
  },
  //top image of stephen king
  splashImage: {
    width: imageWidth,
    resizeMode: 'contain',
    marginTop: -30,
  },
  

});
