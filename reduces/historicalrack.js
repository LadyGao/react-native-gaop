import * as TYPE from '../type'
import { AsyncStorage } from "react-native"
/**
 * 这里可以初始化一个默认的实体类
 */
const initialState = {
    token : '',
    userInfo:{},
    mapType:'vvv'
  }

export default  function login (state=initialState,action){
    switch (action.type) {
          case TYPE.GETTOKEN: // 拿到token
                //存储用户信息
                async () => {
                  try {
                    await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
                  } catch (error) {
                    cosnole.log(error)
                  }
                }
                state=action.data

             return state
              case TYPE.CHANGE: // 初始状态
              return {
                  ...state
              };
          default:
              return state;
  }
}
