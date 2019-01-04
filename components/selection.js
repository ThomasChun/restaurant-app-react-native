import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Dimensions, Image, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { addRestaurant, passRestaurant } from '../actions/restaurants';
import { Header, Icon } from 'react-native-elements';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

class SelectionScreen extends React.Component {

  btnClickPass() {
    if (this.props.restaurants.length > 0) {
      this.props.dispatch(passRestaurant());
    }
  }

  btnClickAdd() {
    this.btnClickPass();
    if (this.props.restaurants.length > 0) {
      this.props.dispatch(addRestaurant(this.props.restaurants[0]))
    }
  }

  static navigationOptions = {
    drawerLabel: 'Selection',
  };

  render() {

    // let displayImage = this.props.restaurants[0].uri;
    let displayImage;

    if (this.props.restaurants.length === 0) { 
      displayImage = this.props.empty.uri;
    } else {
      displayImage = this.props.restaurants[0].uri;
    }

    return (
      <View style={styles.container}> 
        <Header
          leftComponent={<Icon name='menu' color='#fff' underlayColor='#3D6DCC' onPress={() => this.props.navigation.openDrawer()} />}
          centerComponent={{ text: 'SELECT RESTAURANTS', style: { color: '#fff' } }}
          rightComponent={<Icon name='home' color='#fff' underlayColor='#3D6DCC' onPress={() => this.props.navigation.navigate('Home')} />}
          outerContainerStyles={{height: 80}}
        />
        <View style={styles.top}>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={displayImage} /> 
          </View>
        </View>
        <View>
          {this.props.restaurants.length > 0 &&
            <View style={styles.buttonContainer}>
              <Button style={styles.button} color="#ff0000" onPress={() => this.btnClickPass()} title='Pass' accessibilityLabel='Pass button'></Button>
              <Button style={styles.button} color='#0000ff' onPress={() => this.btnClickAdd()} title='Add' accessibilityLabel='Add button'></Button>
            </View>
          }
          {this.props.restaurants.length === 0 &&
            <View>
              <Text style={styles.noRestaurants}> 
                No restaurants left!
              </Text>
            </View>
          }
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurant.restaurants,
  empty: state.restaurant.empty
});

export default connect(mapStateToProps)(SelectionScreen);


const styles = StyleSheet.create({
  noRestaurants: {
    marginBottom: 125,
    textAlign: 'center',
  },
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