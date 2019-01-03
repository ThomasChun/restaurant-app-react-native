import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

class SelectionScreen extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      photos: [
        {id: '1', uri: require('./assets/img-1.jpg')},
        {id: '2', uri: require('./assets/img-2.jpg')},
        {id: '3', uri: require('./assets/img-3.jpg')},
        {id: '4', uri: require('./assets/img-4.jpg')},
        {id: '5', uri: require('./assets/img-5.jpg')}
      ],
      empty: require('./assets/empty.jpg'),

    }
    this.btnClickPass = this.btnClickPass.bind(this)
    this.btnClickAdd = this.btnClickAdd.bind(this)
  }

  btnClickChoice() {
    if (this.state.photos.length === 1) {
      this.setState({ photos: [{id: 'empty', uri: require('./assets/empty.jpg')}]});
    }
    if (this.state.photos.length !== 1) {
      this.setState({ photos: this.state.photos.filter(photo => photo !== this.state.photos[0])});
    }
  }
  
  btnClickPass() {
    this.btnClickChoice();
  }

  btnClickAdd() {
    this.btnClickChoice();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Button
          title="Restaurants"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Restaurants' })
              ],
            }))
          }}
        />
        </View>
        <View style={{flex: 1}}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={this.state.photos[0].uri} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} color="#ff0000" onPress={this.btnClickPass} title='Pass' accessibilityLabel='Pass button'></Button>
          <Button style={styles.button} color='#0000ff' onPress={this.btnClickAdd} title='Add' accessibilityLabel='Add button'></Button>
        </View>
      </View>
    );
  }
}

// ----------------------------------------------------------
//            Restaurants Collections List Screen
// ----------------------------------------------------------

class RestaurantsScreen extends React.Component {
  render() {
    return (
      <View style={styles.top}>
        <Button
          title="Selection"
          onPress={() => this.props.navigation.navigate('Selection')}
        />
      </View>
    );
  }  
}


//  CREATE NAVIGATION NAVIGATOR

const AppNavigator = createStackNavigator({
  Selection: {
    screen: SelectionScreen,
  },
  Restaurants: {
    screen: RestaurantsScreen,
  },
}, {
    initialRouteName: 'Selection',
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
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
    height: SCREEN_HEIGHT -260,
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
    height: 175,
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
