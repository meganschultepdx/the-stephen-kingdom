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
import FadeInView from '../components/FadeInView';


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
              require('../assets/images/creepshow.jpeg')
            }
            style={styles.aboutImage} />
          <FadeInView>
            <Text style={styles.about}>about the Kingdom</Text>
          </FadeInView>
          <Text style={styles.why}>{` 
Awhile ago I thought it would be a fun idea 
to work my way through the vast list of
Stephen King movies (I never made it) and 
starting to do that just made me more
interested in his actual 
role (or non-roll) in the list of
movies that are considered tied to him.

The Stephen Kingdom is my effort to 
compile a list of movies considered to be 
one of Kings's, and then let you know how 
he is associated with it (sprinkled with a 
few fun filming facts along the way). 
`}</Text>
          <Text style={styles.enjoy}>
          Enjoy!</Text>
          <FadeInView>
            <Text style={styles.about}>about Stephen King</Text>
          </FadeInView>
          <Text style={styles.why}>{`
          - He was hit by a car, then bought the 
          car that hit him

          - He played in a band from 1992 to 
          2012 with Amy Tan, Dave Barry, Mitch 
          Albom, Barbara Kingsolver, Matt Groening
          and Ridley Pearson, each members 
          at some point. 

          - He got his start publishing his short
          stories in porn magazines

          - He wrote a musical with 
          John Mellancamp
          
          - He's done a bit of coke over the years
          hahaha, duh

          - He barely remembers writing Cujo (see
           previous fact)

          - He's published books under the alias 
          Richard Bachman

          - as a kid, his friend was struck and 
          killed by a train

          - He originally threw the beginning pages 
          of Carrie away thinking it was trash, 
          luckily his wife pulled it out and 
          convinced him to keep going with it

          - King suffers from triskaidekaphobia
          `}</Text>
        </View>


      </ScrollView>

    </View>
  );
}

AboutScreen.navigationOptions = {
  header: null,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  aboutContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  aboutImage: {
    width: imageWidth,
    marginTop: 50,
    borderRadius: 4,
  },
  about: {
    color: '#bf312d',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'eighties-horror',
    fontSize: 24,
    paddingBottom: 10,
    paddingTop: 10,
  },
  why: {
    color: 'lightgrey',
    fontSize: 15,
    marginTop: -20,
  },
  enjoy: {
      color: 'lightgrey',
      fontSize: 15,
      marginTop: -20,
      textAlign: 'center',
    }
  

});
