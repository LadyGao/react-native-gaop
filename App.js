import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator,createBottomTabNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { Provider } from 'react-redux';
import configureStore from './src/store';
const store = configureStore();


import {BottomTabNavigator} from './src/router/router'
const AppContainer = createAppContainer(BottomTabNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
      <AppContainer /> 
    </Provider>
    ) 
  }
}