import * as TYPE from '../type'
import { AsyncStorage } from "react-native"
/**
 * 这里可以初始化一个默认的实体类
 */
const initialState = {
    token : '',
    userInfo:{},
    mapType:'vvv',
    menu:[]
  }

export default  function login (state=initialState,action){
    switch (action.type) {
          case TYPE.GETTOKEN: // 拿到token
                //存储用户信息
                // AsyncStorage.setItem('token', action.data.token);
             return {
               ...state,
              ...action.data
            }
              case TYPE.GETMENU: // 拿到菜单
              return {
                  ...state,
                  menu:action.data
              };
              case TYPE.CHANGEMENU: // 修改菜单
              return {
                  ...state,
                  menu:action.data
              };
          default:
              return state;
  }    
}
