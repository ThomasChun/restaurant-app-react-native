import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Header, Icon } from 'react-native-elements';

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
        <ScrollView>
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
            The selection screen renders images for the user to flip through and either 'pass' or 'add' a restaurant to their collection that can later be viewed on the restaurants screen. 
          </Text>

          <Button style={styles.button} color='#0000ff' onPress={() => this.props.navigation.navigate('Selection')} title='GO TO SELECTION SCREEN' accessibilityLabel='Add button'></Button>

          <Text h1 style={styles.sectionText}>
            RESTAURANTS SCREEN
          </Text>

          <Text style={styles.textContent}>
            The restaurants screen lists all of the restaurants the user has selected to 'add' from the selections screen. If you click on a restaurant from the list, a dialog box will pop up with the restaurants information. Users can remove restaurants from their restaurants list by first clicking on the restaurant name, then pressing the 'delete' button.
          </Text>

          <Button style={styles.button} color='#0000ff' onPress={() => this.props.navigation.navigate('Restaurants')} title='GO TO RESTAURANTS SCREEN' accessibilityLabel='Add button'></Button>
           </ScrollView>
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
  
  sectionText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
    textAlign: 'center',
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
    fontSize: 16,
  },

  button: {
    marginBottom: 15,
    color: '#000000',
    borderColor: '#0000ff',
    borderWidth: 1,
    borderRadius: 10,
  },

});