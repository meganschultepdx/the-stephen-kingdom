import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MovieComponent from '../components/MovieComponent';
import { db } from '../firebaseConfig';

let moviesRef = db.ref('/movies');


export default class MovieInfoScreen extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    moviesRef.on('value', snapshot => {
      let data = snapshot.val();
      let movies = Object.values(data);
      this.setState({ movies });
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
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
        <MovieComponent movies={this.state.movies} />

      </ScrollView>
    );
  }
}


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
