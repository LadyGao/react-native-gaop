import { createStackNavigator,createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Car from '../../src/view/car'
import Home from '../../src/view/home'
export const BottomTabNavigator= createBottomTabNavigator({
    Home: Home,
    car: Car,
});

