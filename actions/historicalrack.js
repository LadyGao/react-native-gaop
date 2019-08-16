import * as TYPE from '../type'

import http from '../utils/http'
import unzip from '../utils/zip'
/**
 * 请求token
 * @param {*} params 
 */
export function historicalrack(params){
    return (dispatch)=>{
        
        // fetch('http://new.test.cvtsp.com/api/gps/monitor/getMultiLocation',{
        //     method:'POST',
    
        //     headers:{
        //         "Authorization": "Bearer ddd899b7-e9cd-4404-a894-9883f204f08b",
        //          "Content-Type": "application/json" 
        //     },
        //     body:JSON.stringify({"mapType":"3","vehicleIds":"1685081524758118400"})
        // }).then(res=>{
            
        //     return res.json()    
        // }).then(data=>{ 
        //     console.log(data)
        // })   

        http({
            url:'/19056/order/queryHourData',
            method:'get',
            params:{
                startTime: '2019-08-09 00:00:00',
                endTime: '2019-08-09 14:06:42',
                vehicleId: '1685081524758118400',
                mapType: 3,
            }
        }).then(res=>{
           
        console.log(res,'historicalrack')
           
         })
        // http({
        //     url:'http://new.test.cvtsp.com/api/gps/monitor/getMultiLocation',
        //     method:'POST',
        //     data:{
        //         mapType: "3",
        //         vehicleIds: "106104143390716907"
        // }}).then(res=>{
           
        // console.log(res,'historicalrack')
       
        //  })
    }

   
}

