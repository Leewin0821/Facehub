/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ListView,
} from 'react-native';
import NavBar from './Components/NavBar';
import UserCard from './Components/UserCard';
import {connect} from 'react-redux';
import {UserListAction} from './Actions/UserListAction'

class App extends Component {
  constructor() {
    super();
    this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2)=> r1 !== r2});
    StatusBar.setBarStyle('light-content');
  }
  componentWillMount() {
    this.props.fetchUser();
  }
  render() {
    const ds = this.dataSource.cloneWithRows(this.props.userList);
    return (
      <View style={styles.container}>
        <NavBar />
        <ListView
        enableEmptySections = {true}
        dataSource={ds}
        renderRow={(user)=><UserCard user={user} />}/>
      </View>
    );
  }
}

function mapProps(state) {
  return {
    userList: state
  }
}

function mapDispatch(dispatch) {
  return {
    fetchUser: () => dispatch(UserListAction())
  }
}

export default connect(mapProps, mapDispatch)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  }
});
