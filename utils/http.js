import {baseUrl,DeviceStorage} from './common'
import { AsyncStorage } from "react-native"
export default function  http({url,params,data,method='POST'}){
        // AsyncStorage.getItem('token').then(token=>{
        //     console.log(token);
            
        // })
     var httpUrl=baseUrl+url
     const token='13405790-f90c-450c-96db-e30f83070a88'
     const MEss={
         method,
         headers:{
            "Authorization": "Bearer 5abfcba4-f281-45d7-9d40-9d8dd24f52ad", 
            "Content-Type": "application/json" ,
            // "Content-Type": "application/x-www-form-urlencoded"
         }
        }   
        
        if(data){
            MEss.body=JSON.stringify(data)
        }
        
        if(params){
            httpUrl=stringify(url)
        }
       return sendHttp(httpUrl,MEss)  
         
    // })      
function stringify(url){
    var strUrl=baseUrl+url+'?'
     for(var i in params){
        strUrl+=i+'='+params[i]+'&'
    }
     return strUrl
}   

/**
 * 
 * @param {*} httpUrl 
 * @param {*} MEss 
 */
function sendHttp(httpUrl,MEss){
    return fetch(httpUrl,MEss).then(res=>{
            return res.json()
        }).then(data=>{
            return new Promise((res,rej)=>{  
                if(data.flag){
                    res(data.data)
                }else{
                    alert(data.errorCode)
                    rej({error:data.errorCode})
                }
            })
        })
}
//     //GET请求
//     if(method=='GET'){
//         httpMess=baseUrl+url+'?'
//         for(var i in params){httpMess+=i+'='+params[i]+'&'}
//         HTTP=fetch(httpMess)
//     }else{
//     //POST请求
//     HTTP=fetch(url,
//            {
//             method,
//             mode: 'cors',
//             credentials: 'include',
//             headers:{
//                'Content-Type': 'application/x-www-form-urlencoded',
//                'Authorization': "Basic " + btoa('web:web'),
//                'token':'394ee261-bdf7-469d-9c6f-72313d3e1b0c'
//             }, 
//             body: JSON.stringify(data)
//            })
//         httpMess={
            
//         }
//     }
   
//     return  HTTP.then(res=>{
//         console.log(res)
//             return res.json()
//         }).then(data=>{
//             if(data.flag){
//                 console.log(data,'data')
//                 return(data.data)
//             }else{
//                 alert(data,'erreo')
//             }
//         })
}

