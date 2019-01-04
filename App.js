import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';
import Selection from './components/selection';
import RestaurantList from './components/restaurant-list';
import Home from './components/home';

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Selection: {
    screen: Selection,
  },
  Restaurants: {
    screen: RestaurantList,
  },
});

const Navigator = createAppContainer(MyDrawerNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});