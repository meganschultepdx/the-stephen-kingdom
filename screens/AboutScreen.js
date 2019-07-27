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


export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.aboutContainer}>
          <Image
            source={
                require('../assets/images/movie-collage.jpg')
            }
            style={styles.aboutImage}/>
        </View>

      
      </ScrollView>

    </View>
  );
}

AboutScreen.navigationOptions = {
  title: 'A little about this app',
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  
  contentContainer: {
   
  },
  aboutContainer: {
    alignItems: 'center',
    
    marginBottom: 20,
  },
  //top image of stephen king
  aboutImage: {
    width: imageWidth,
    resizeMode: 'contain',
    marginTop: 20,
  },
  

});
