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
                <Text style={styles.description}>Title  |    <Text style={styles.data}>{this.props.movies[index].title}</Text></Text>

                <Text style={styles.description}>Release Year  |   <Text style={styles.data}>{this.props.movies[index].release}</Text></Text>

                <Text style={styles.description}> Based on  |   <Text style={styles.data}>{this.props.movies[index].literature}</Text></Text>

                <Text style={styles.description}>Movie or TV Mini-series  |   <Text style={styles.data}>{this.props.movies[index].format}</Text></Text>

                <Text style={styles.description}>Directed By  |   <Text style={styles.data}>{this.props.movies[index].directedBy}</Text></Text>

                <Text style={styles.description}>Screenplay written by  |   <Text style={styles.data}>{this.props.movies[index].screenplay}</Text></Text>

                <Text style={styles.description}>Synopsis  |   <Text style={styles.data}>{this.props.movies[index].synopsis}</Text></Text>

                <Text style={styles.description}>Fun Filming Fact  |   <Text style={styles.data}>{this.props.movies[index].funfact}</Text></Text>
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
    marginTop: 25,
  },
  description: {
    fontSize: 16,
    textAlign: 'left',
    marginLeft: -30,
    marginTop: 10,
    color: '#bf312d',
    textTransform: 'uppercase'
  },
  data: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    textTransform: 'capitalize'
  },

});