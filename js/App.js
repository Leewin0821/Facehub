/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  StatusBar,
  ListView
} from 'react-native'
import NavBar from './Components/NavBar'
import UserCard from './Components/UserCard'
import { connect } from 'react-redux'
import { userListAction } from './Actions/UserListAction'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE'
  }
})

class App extends Component {
  constructor() {
    super()
    this.dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    StatusBar.setBarStyle('light-content')
  }
  componentWillMount() {
    this.props.fetchUser()
  }
  render() {
    const ds = this.dataSource.cloneWithRows(this.props.userList)
    return (
      <View style={styles.container}>
        <NavBar />
        <ListView
          enableEmptySections
          dataSource={ds}
          renderRow={(user) => <UserCard user={user} />}
        />
      </View>
    )
  }
}

function mapProps(state) {
  return {
    userList: state
  }
}

function mapDispatch(dispatch) {
  return {
    fetchUser: () => dispatch(userListAction())
  }
}

export default connect(mapProps, mapDispatch)(App)
