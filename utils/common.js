const Dimensions = require('Dimensions');
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;

export const screen={width:screenW,height:screenH}
export const baseUrl='http://new.test.cvtsp.com/api'



import {
    AsyncStorage
 }from 'react-native';
 export class DeviceStorage{
     static get(key) {
        return AsyncStorage.getItem(key).then((value) => {
          const jsonValue = JSON.parse(value);
          return jsonValue;
    });
      }
      static save(key, value) {
          return AsyncStorage.setItem(key, JSON.stringify(value));
      }
      static update(key, value) {
          return DeviceStorage.get(key).then((item) => {
          value = typeof value === 'string' ? value : Object.assign({}, item, value);
       return AsyncStorage.setItem(key, JSON.stringify(value));
     });
      }
      static delete(key) {
          return AsyncStorage.removeItem(key);
      }
 }
