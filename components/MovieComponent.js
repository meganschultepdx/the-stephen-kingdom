import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class MovieComponent extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired
  };

  render() {
    return (
      <View style={StyleSheet.moviesList}>
        {this.props.movies.map((movie, index) => {
          return (
            <View key={index}>
              <Text style={styles.movieText}>{movie.title}</Text>
              <Text style={styles.movieText}>{movie.release}</Text>
              <Text style={styles.movieText}>{movie.format}</Text>
              
              </View>
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
  movieText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white'
  }
});