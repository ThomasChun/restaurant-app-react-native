import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';
import Selection from './components/selection';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Selection />
        </View>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'lightgrey',
  },

  top: {
    height: 60,
    alignItems: 'center',
    paddingTop: 20
  },

  imageContainer: {
    height: SCREEN_HEIGHT -300,
    width: SCREEN_WIDTH,
    padding: 10,
    position: 'absolute'
  },

  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover',
    borderRadius: 15
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 225,
    // backgroundColor: 'white',
  },

  button: {
    color: '#000000',
    // width: '25%',
    borderColor: '#0000ff',
    // backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
  }

});