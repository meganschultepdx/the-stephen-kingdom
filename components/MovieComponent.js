import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Modal } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class MovieComponent extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired
  };

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: true });
  }

  handleCloseModal(visible) {
    this.setState({ modalVisible: false });
  }

  render() {
    return (
      <View style={StyleSheet.moviesList}>
        {this.props.movies.map((movie, index) => {
          return (
            <ScrollView key={index}>
              <View style={styles.container}>
                <Image onPress={() => { this.setModalVisible(true); }}
                  style={{ width: 130, height: 190 }} source={{ uri: movie.image_url }} />
              </View>
              <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  alert.alert('modal has been closed');
                }} >
                <Text style={styles.title}>Title  |    {movie.title}</Text>

                <Text style={styles.release}>Release Year  |   {movie.release}</Text>

                <Text style={styles.literature}>Screenplay written by  |   {movie.literature}</Text>

                <Text style={styles.format}>Movie or TV Mini-series  |   {movie.format}</Text>

                <Text style={styles.directed}>Directe By  |   {movie.directedBy}</Text>

                <Text style={styles.screenplay}>Screenplay written by  |   {movie.screenplay}</Text>

                <Text style={styles.synopsis}>Screenplay written by  |   {movie.synopsis}</Text>

                <Text style={styles.funfact}>Screenplay written by  |   {movie.funfact}</Text>

                <TouchableHighlight onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }} style={styles.closeModal}>Close Modal</TouchableHighlight>
              </Modal>

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