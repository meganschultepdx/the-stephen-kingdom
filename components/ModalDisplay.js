import React, { Component } from 'react';
import { Modal, View, Image, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


const DisplayModal = (props) => (
    <Modal visible={props.display} animationType="slide"
        onRequestClose={() => console.log('closed')}>>
    <View style={StyleSheet.moviesList}>
            {this.props.movies.map((movie, index) => {
                return (
                    <View key={index}>

                        <Text style={styles.title}>Title  |    {movie.title}</Text>

                        <Text style={styles.release}>Release Year  |   {movie.release}</Text>

                        <Text style={styles.literature}>Screenplay written by  |   {movie.literature}</Text>

                        <Text style={styles.format}>Movie or TV Mini-series  |   {movie.format}</Text>

                        <Text style={styles.directed}>Directe By  |   {movie.directedBy}</Text>

                        <Text style={styles.screenplay}>Screenplay written by  |   {movie.screenplay}</Text>

                        <Text style={styles.synopsis}>Screenplay written by  |   {movie.synopsis}</Text>

                        <Text style={styles.funfact}>Screenplay written by  |   {movie.funfact}</Text>
                    </View>
                );
            })}
        </View>
    </Modal>
)

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

  export default ModalDisplay;