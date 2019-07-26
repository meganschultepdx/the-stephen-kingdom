import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


export default function MovieInfoScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.welcomeContainer}>
          <Text style={styles.getStartedText}>
            WELCOME TO THE KINGDOM!
          </Text>
          <Text style={styles.about}>
            {`
Ever wonder which Stephen King movies were actually written or directed by him or just based off his literature?
How about one that involved a lawsuit to get his name dissasociated with the project because it relates to a work of his in title only? 
Well, click on the movie posters below to find out more info on each! 
`}
          </Text>
          </View>
    </ScrollView>
  );
}

MovieInfoScreen.navigationOptions = {
  title: 'movie & mini-series resource page',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
