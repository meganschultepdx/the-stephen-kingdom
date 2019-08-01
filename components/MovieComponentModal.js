import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Modal, TouchableHighlight, Button } from 'react-native';
import PropTypes from 'prop-types';
import { whileStatement } from '@babel/types';



export default class MovieComponent extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired
  };

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {

    return (

      <View style={StyleSheet.moviesList}>
        {this.props.movies.map((movie, index) => {
          return (
            <ScrollView key={index}>
              
                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(true);
                  }}>
                  <Image 
                    style={{ width: 130, height: 190 }} source={{ uri: this.props.movies[index].image_url }} />
                </TouchableHighlight>

              <Modal
                style={styles.modal}
                transparent={false}
                backdropColor = {'black'}
                bakcdropOpacity = {4}
                marginTop={50}
                animationType="slide"
                  visible={this.state.modalVisible}
                onRequestClose={() => {
                  this.setModalVisible(false);
                }} >
                <Text style={styles.title}>Title  |    {this.props.movies[index].title}</Text>

                <Text style={styles.release}>Release Year  |   {this.props.movies[index].release}</Text>

                <Text style={styles.literature}>Screenplay written by  |   {this.props.movies[index].literature}</Text>

                <Text style={styles.format}>Movie or TV Mini-series  |   {this.props.movies[index].format}</Text>

                <Text style={styles.directed}>Directed By  |   {this.props.movies[index].directedBy}</Text>

                <Text style={styles.screenplay}>Screenplay written by  |   {this.props.movies[index].screenplay}</Text>

                <Text style={styles.synopsis}>Synopsis  |   {this.props.movies[index].synopsis}</Text>

                <Text style={styles.funfact}>Fun Filming Fact  |   {this.props.movies[index].funfact}</Text>

                <Button onPress={() => {
                  console.log("press");
                  this.setModalVisible(!this.state.modalVisible);
                }} title="close" style={styles.closeModal}/>

              </Modal>


            </ScrollView>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({

  modal: {
    marginTop: 100,
  },
  moviesList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    color: 'black'
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
    textTransform: 'uppercase'
  },
  release: {
    fontSize: 12,
    textAlign: 'center',
    color: 'black',
    textTransform: 'uppercase'
  },
  release: {
    fontSize: 12,
    textAlign: 'center',
    color: 'black',
    textTransform: 'uppercase'
  },
  format: {
    fontSize: 12,
    textAlign: 'center',
    color: 'black',
    textTransform: 'uppercase'
  },
  directed: {
    fontSize: 12,
    textAlign: 'center',
    color: 'black',
    textTransform: 'uppercase'
  },
  screenplay: {
    fontSize: 12,
    textAlign: 'center',
    color: 'black',
    textTransform: 'uppercase'
  },
  literature: {
    fontSize: 12,
    textAlign: 'center',
    color: 'black',
    textTransform: 'uppercase'
  },
  synopsis: {
    fontSize: 12,
    textAlign: 'center',
    color: 'black',
    textTransform: 'uppercase'
  },
  funfact: {
    fontSize: 12,
    textAlign: 'center',
    color: 'black',
    textTransform: 'uppercase'
  },
});