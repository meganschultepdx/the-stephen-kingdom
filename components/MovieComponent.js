import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableHighlight, Button, LayoutAnimation, NativeModules } from 'react-native';
import PropTypes from 'prop-types';
import { whileStatement } from '@babel/types';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class MovieComponent extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired
  };

  constructor(){
      super();
      this.state = {
          status: false
      }
  }

  ShowHideMovieData = () =>{
      if(this.state.status === true)
      {
          this.setState({status: false})
      }
      else
      {
          this.setState({status: true})
      }
  }


  render() {

    return (

      <View style={styles.moviesList} >
        {this.props.movies.map((movie, index) => {
            console.log(index);
          return (
            <ScrollView key={index}>
              
                <TouchableHighlight 
                  onPress={this.ShowHideMovieData}>
                  <Image 
                    style={{ width: 130, height: 190, marginBottom: -25 }} source={{ uri: this.props.movies[index].image_url }} />
                </TouchableHighlight>

                <View style={styles.MovieDataContainer}>
                { this.state.status ? 
                <View>
                <Text style={styles.title}>Title  |    {this.props.movies[index].title}</Text>

                <Text style={styles.release}>Release Year  |   {this.props.movies[index].release}</Text>

                <Text style={styles.literature}>Screenplay written by  |   {this.props.movies[index].literature}</Text>

                <Text style={styles.format}>Movie or TV Mini-series  |   {this.props.movies[index].format}</Text>

                <Text style={styles.directed}>Directed By  |   {this.props.movies[index].directedBy}</Text>

                <Text style={styles.screenplay}>Screenplay written by  |   {this.props.movies[index].screenplay}</Text>

                <Text style={styles.synopsis}>Synopsis  |   {this.props.movies[index].synopsis}</Text>

                <Text style={styles.funfact}>Fun Filming Fact  |   {this.props.movies[index].funfact}</Text>
                </View>
                : null }
                
                </View>
                
            </ScrollView>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({

MovieDataContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 30,
},

  moviesList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginLeft: 40,
    marginTop: 15,
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