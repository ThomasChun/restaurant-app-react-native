import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Dimensions, Image, Button } from 'react-native';
import { Header, Icon } from 'react-native-elements';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

class HomeScreen extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {

    return (
      <View style={{flex: 1}}>
        <View>
          <Header
            leftComponent={<Icon name='menu' color='#fff' underlayColor='#3D6DCC' onPress={() => this.props.navigation.openDrawer()} />}
            centerComponent={{ text: 'HOME', style: { color: '#fff' } }}
            rightComponent={<Icon name='home' color='#fff' underlayColor='#3D6DCC' onPress={() => this.props.navigation.navigate('Home')} />}
            outerContainerStyles={{height: 80}}
          />
        </View>
        <View style={styles.top}>
          <Text h1 style={styles.sectionText}>
            RESTAURANT SELECTION APP
          </Text>

          <Text style={styles.textContent}>
            Click on the icon at the top left of the screen to open the navigation bar. The navigation bar provides access to the Home, Selection, and Restaurant screens.
          </Text>

          <Text h1 style={styles.sectionText}>
            SELECTION SCREEN
          </Text>

          <Text style={styles.textContent}>
            The selection screen renders images for the user to flip through and either pass or add a restaurant to their collection that can later be viewed on the restaurants page. 
          </Text>

          <Text h1 style={styles.sectionText}>
            RESTAURANTS SCREEN
          </Text>

          <Text style={styles.textContent}>
            The restaurants screen lists all of the restaurants the user has selected to add from the selections screen. If you click on a restaurant from the list, a dialog box will pop up with the restaurants information.
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurant.restaurants,
});

export default connect(mapStateToProps)(HomeScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'lightgrey',
  },

  sectionText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },

  top: {
    height: 60,
    alignItems: 'center',
    paddingTop: 20,
    flex: 1,
  },

  textContent: {
    marginBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    flexWrap: 'wrap',
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