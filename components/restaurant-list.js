import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { List, ListItem, Header, Icon } from 'react-native-elements';
import { MaterialDialog } from 'react-native-material-dialog';
import { selectRestaurant, clearSelectedRestaurant, deleteSelectedRestaurant } from '../actions/restaurants';

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
          cancelLabel='DELETE'
          onOk={() => this.props.dispatch(clearSelectedRestaurant())}
          onCancel={() => this.props.dispatch(deleteSelectedRestaurant(this.props.viewRestaurant))}>
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
  selectedRestaurants: state.restaurant.selectedRestaurants,
  visible: state.restaurant.visible,
  viewRestaurant: state.restaurant.viewRestaurant,
});

export default connect(mapStateToProps)(RestaurantList);


const styles = StyleSheet.create({

  top: {
    height: 60,
    alignItems: 'center',
    paddingTop: 30,
    paddingLeft: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },

});