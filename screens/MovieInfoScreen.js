import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import MovieComponent from '../components/MovieComponent';
import { db } from '../FirebaseConfig';
import FadeInView from '../components/FadeInView';
import MovieInfoAboutBlurbs from '../components/MovieInfoAboutBlurbs';

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
        <MovieInfoAboutBlurbs />
        <MovieComponent movies={this.state.movies} />

      </ScrollView >
    );
  }
}

MovieInfoScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50,
    backgroundColor: '#000',
  },
  welcome: {
    color: '#bf312d',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'eighties-horror',
    fontSize: 24,
    paddingBottom: 10,
  },
  

});
