import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';

export default class UserCard extends Component {
  componentWillMount() {
    this.user = this.props.user;
  }

  render() {
    return (
      <View style={[style.card, style.shadow]}>
        <Image style={style.avatar}
        source={{uri:this.user.photo}}/>
        <View style={style.textWrapper}>
          <View style={style.nameContainer}>
            <Text style={style.name}>{this.user.name}</Text>
            <View style={style.tagContainer}>
              <Text style={style.officeTag}>{this.user.office}</Text>
            </View>
          </View>
          <Text style={style.job}>{this.user.title} on {this.user.project}</Text>
          <Text style={style.email}>{this.user.email}</Text>
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
