import React from 'react';
import { Provider } from 'react-redux';
import {
  Image,
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';
import { Button, SocialIcon, ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Historicalrack from './Historicalrack'
import Menu from '../../components/menu/menu.js'
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          title: 'Appointments',
          icon: 'av-timer',
          chevron: true
        },
        {
          title: 'Trips',
          icon: 'flight-takeoff',
          chevron: true
        },
      ]
    }
  }
  btnClick() {
    console.log(this,'this')
    // this.props.navigation.navigate('Historicalrack')
  }
  listItem(val, i) {
    let list = this.state.list.map(item => {
      if (item == val) {
        return { ...val, chevron: !val.chevron }
      }
      return item
    })
    this.setState({
      list 
    })
  }
  routerGo(href){
    console.log(href)
    this.props.navigation.navigate(href)
  }
  render() {

    return (
      <View>
        <Text>菜单</Text> 
        <Menu routerGo={this.routerGo.bind(this)}/>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  menu: {
    height: '90%',
    width: 200,
  },
  Tool: {
    height: '10%',
    width: 300,
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
});