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
import FadeInView from '../components/FadeInView';

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
        <FadeInView>
        <Text style={styles.welcome}>
          welcome to the kingdom!
          </Text>
        </FadeInView>
          <Text style={styles.info}>
          {`
Ever wonder which Stephen King movies were actually written or directed by him or just based off his literature? `}</Text>
<Text style={styles.info2}>{`
How about one that involved a lawsuit to get his name dissasociated with the project because it relates to a work of his in title only? `}</Text>
<Text style={styles.info3}>{`
Well, click on the movie posters below to find out more info on each! `}</Text>      
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
    color: 'red',
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
  },
  info3: {
    color: 'grey',
    textAlign: 'center',
    marginRight: 30,
    marginLeft: 30,
    paddingBottom: 20,
  }
});
