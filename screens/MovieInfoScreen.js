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
    color: '#bf312d',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'eighties-horror',
    fontSize: 24,
    paddingBottom: 10,
  },
  info: {
    color: 'lightgrey',
    textAlign: 'left',
    borderWidth: 1,
    paddingBottom: 10,
    paddingRight: 40,
    paddingLeft: 20,
    borderColor: '#212424',
    backgroundColor: '#212424',
    margin: 10,
    marginRight: 30,
    borderRadius: 10,
    fontFamily: 'texgyreadventor-bold',
    // textTransform: "uppercase",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  info2: {
    color: '#212424',
    textAlign: 'right',
    borderWidth: 1,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 40,
    borderColor: 'lightgrey',
    backgroundColor: 'lightgrey',
    opacity: .9,
    marginLeft: 30,
    marginRight: 10,
    fontFamily: 'texgyreadventor-bold',
    // textTransform: "uppercase",

  },
  info3: {
    color: 'lightgrey',
    textAlign: 'left',
    borderWidth: 1,
    paddingBottom: 10,
    paddingRight: 40,
    paddingLeft: 20,
    borderColor: '#212424',
    backgroundColor: '#212424',
    margin: 10,
    borderRadius: 100,
    marginRight: 30,
    fontFamily: 'texgyreadventor-bold',
    // textTransform: "uppercase",
  }
});
