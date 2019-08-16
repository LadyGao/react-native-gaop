
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Historicalrack from './mapCar/Historicalrack'
import HomeScreen from "./mapCar/HomeScreen.js";


const Car = createStackNavigator({
  HomeScreen,
  '/monitor/historyTrack':Historicalrack, 
})
export default Car