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
      <View>
          <Text style={styles.welcome}>
            welcome to the kingdom!
          </Text>
          <Text style={styles.info}>
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

/*MovieInfoScreen.navigationOptions = {
  title: 'movie & mini-series resource page',
};*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#000',
  },
  welcome: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'eighties-horror',
    fontSize: 22,
  },
  info: {
    color: 'grey',
    textAlign: 'center',
    marginRight: 30,
    marginLeft: 30,
  }
});
