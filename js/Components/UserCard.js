import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';

export default class UserCard extends Component {
  render() {
    return (
      <View style={[style.card, style.shadow]}>
        <Image style={style.avatar}
        source={{uri: 'http://www.bmwusa.com/bmw/api/assets/images/BMWi/BMWi8/BMWi_i8_module4_B4.jpg?v=5fc09bfa5efbb09cf3cd0e73e2d9aad7'}}/>
        <View style={style.textWrapper}>
          <Text style={style.name}>Leewin</Text>
          <Text style={style.job}>Boss</Text>
          <Text style={style.email}>lwzhang@thoughtworks.com</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  name: {
    fontSize: 10,
    color: '#333',
    fontWeight: 'bold',
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
  }
})
