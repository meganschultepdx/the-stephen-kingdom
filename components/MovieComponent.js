import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import ModalDisplay from '../components/ModalDisplay';

export default class MovieComponent extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired
  };

  state = {
    display: false
  }

  triggerModal() {
    this.setState(prevState => {
      return {
        display: true
      }
    });
  }

  render() {
    return (
      <View style={StyleSheet.moviesList}>
        {this.props.movies.map((movie, index) => {
          return (
            <ScrollView key={index}>
              <View style = { styles.container }>
              <Image onPress = { () => console.log('pic pressed') } style={{width: 130, height: 190}} source={{uri: movie.image_url}} />
              </View>
              <ModalDisplay
              display = { this.state.display } />
              
              {/* <Text style={styles.title}>Title  |    {movie.title}</Text> 

               <Text style={styles.release}>Release Year  |   {movie.release}</Text>

              <Text style={styles.literature}>Screenplay written by  |   {movie.literature}</Text>

              <Text style={styles.format}>Movie or TV Mini-series  |   {movie.format}</Text>

              <Text style={styles.directed}>Directe By  |   {movie.directedBy}</Text>

              <Text style={styles.screenplay}>Screenplay written by  |   {movie.screenplay}</Text>

              <Text style={styles.synopsis}>Screenplay written by  |   {movie.synopsis}</Text>

              <Text style={styles.funfact}>Screenplay written by  |   {movie.funfact}</Text> */}
              
              </ScrollView>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  moviesList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    color: 'white'
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase'
  },
  release: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase'
  },
  release: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase'
  },
  format: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase'
  },
  directed: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase'
  },
  screenplay: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase'
  },
  literature: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase'
  },
  synopsis: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase'
  },
  funfact: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase'
  },
});