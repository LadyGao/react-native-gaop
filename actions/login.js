import * as TYPE from '../type'
import http from '../utils/http'
/**
 * 请求token
 * @param {*} params 
 */
export function getToken(params){

    return (dispatch)=>{
            http({
                url:'/auth/oauth/token',
                params:{
                    grant_type: 'password',
                    username: '111111111/admin/zh_CN',
                    password: 'a5450fefb424604b5e5e81d688e9d4dbf6a974bcb46100aaa89fe357d9763a0592e6d261782ce321b3395fdeba841d46930806fc253108eabd113d2526745051',
                    scope: 'server',
                }
            }).then((res)=>{
                    console.log(res,'res') 
                    if(res){
                       dispatch({
                           type:TYPE.GETTOKEN ,
                           data:res
                       })
                    }
                 })
        // fetch('http://test.cvtsp.com/api/login?enterpriseCode=111111111&account=admin&password=18f4f4d01f8ec4393a12e25521980cb26ad0484783ec6fdc431cc51a8aed71e5385bd22e691736cc504df19a10e6296487d6bd0f2be9e4215a910690162530b8&language=zh_CN',{
        //     url:'/login',
        //     method:'GET',
        //     params:{
        //         enterpriseCode:'111111111',
        //         account:'admin',
        //         password:'18f4f4d01f8ec4393a12e25521980cb26ad0484783ec6fdc431cc51a8aed71e5385bd22e691736cc504df19a10e6296487d6bd0f2be9e4215a910690162530b8',
        //         language:'zh_CN'
        // }}).then((res)=>{
        //     console.log(res,'res') 
        //     if(res){
        //        dispatch({
        //            type:TYPE.GETTOKEN ,
        //            data:res
        //        })
        //     }
        //  })
        
    }

   
}
/**
 * 获取菜单接口
 */
export  function getMenu(params){
    return   {
                        type:TYPE.GETMENU ,
                        data:params
             }

}
/**
 * 修改菜单
 */
export  function changetMenu(params){
    return   {
                        type:TYPE.CHANGEMENU ,
                        data:params
             }

}