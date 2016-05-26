import React, { Component } from 'react';
import Reflux from 'reflux';
import {
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';

export default class UserCard extends Component {
  // mixins: [Reflux.listenTo(UserStore, 'onStatusChange')],
  // getInitialState: function() {
  //   return {users: []};
  // },
  // onStatusChange: function() {
  //   this.setState(users: UserStore.users);
  // },
  render() {
    return (
      <View style={[style.card, style.shadow]}>
        <Image style={style.avatar}
        source={{uri: 'http://www.bmwusa.com/bmw/api/assets/images/BMWi/BMWi8/BMWi_i8_module4_B4.jpg?v=5fc09bfa5efbb09cf3cd0e73e2d9aad7'}}/>
        <View style={style.textWrapper}>
          <View style={style.nameContainer}>
            <Text style={style.name}>Leewin</Text>
            <View style={style.tagContainer}>
              <Text style={style.officeTag}>New York</Text>
            </View>
          </View>
          <Text style={style.job}>Boss</Text>
          <Text style={style.email}>lwzhang@thoughtworks.com</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  name: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    flex: 1,
  },
  job: {
    fontSize: 14,
    color: '#666',
  },
  email: {
    fontSize: 12,
    color: '#999',
  },
  card: {
    backgroundColor: 'white',
    height: 103,
    marginHorizontal: 7,
    marginVertical: 3,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  textWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    marginLeft: 20,
    justifyContent: 'space-between',
  },
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    }
  },
  avatar: {
    width: 73,
    height: 73,
  },
  nameContainer: {
    flexDirection: 'row',
  },
  tagContainer: {
    flex: 2,
    alignSelf: 'center'
  },
  officeTag: {
    fontSize: 10,
    alignSelf: 'flex-start',
    backgroundColor: '#F50057',
    color: 'white',
    borderRadius: 9,
    padding: 4,
    textAlign: 'center',
  },
});
