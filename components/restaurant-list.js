import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Dimensions, Image, Button, ScrollView } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { List, ListItem, Header, Icon } from 'react-native-elements';
import { MaterialDialog } from 'react-native-material-dialog';
import { selectRestaurant, clearSelectedRestaurant } from '../actions/restaurants';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

class RestaurantList extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Restaurants',
  };

  render() {
    return (
      <View>
      <Header
        leftComponent={<Icon name='menu' color='#fff' underlayColor='#3D6DCC' onPress={() => this.props.navigation.openDrawer()} />}
        centerComponent={{ text: 'RESTAURANTS', style: { color: '#fff' } }}
        rightComponent={<Icon name='home' color='#fff' underlayColor='#3D6DCC' onPress={() => this.props.navigation.navigate('Home')} />}
        outerContainerStyles={{height: 80}} 
      />
      <ScrollView>
        <Text style={styles.top}>Restaurant List</Text>
        <List>
          {
            this.props.selectedRestaurants.map((item) => (
              <ListItem
                key={item.name}
                title={item.name}
                avatar={item.uri}
                hideChevron
                onPress={() => this.props.dispatch(selectRestaurant(item))}
              />
            ))
          }
        </List>
        <MaterialDialog
          title={this.props.viewRestaurant.name}
          visible={this.props.visible}
          okLabel='CLOSE'
          onOk={() => this.props.dispatch(clearSelectedRestaurant())}
          onCancel={() => this.props.dispatch(clearSelectedRestaurant())}>
          <Text style={styles.dialogText}>
            {this.props.viewRestaurant.description}
          </Text>
        </MaterialDialog>
      </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurant.restaurants,
  empty: state.restaurant.empty,
  selectedRestaurants: state.restaurant.selectedRestaurants,
  visible: state.restaurant.visible,
  viewRestaurant: state.restaurant.viewRestaurant,
});

export default connect(mapStateToProps)(RestaurantList);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'lightgrey',
  },

  top: {
    height: 60,
    alignItems: 'center',
    paddingTop: 30,
    paddingLeft: 5,
    fontWeight: 'bold',
    fontSize: 16,
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