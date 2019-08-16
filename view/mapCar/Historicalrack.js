import React from 'react';
import { connect } from 'react-redux';
import {
    Button,
    StyleSheet,
    FlatList,
    View,
    Text,
    TextInput,
  } from 'react-native';
  import {historicalrack} from '../../actions/historicalrack';
  import {screen} from '../../utils/common';
import { MapView } from 'react-native-amap3d'
class Historicalrack extends React.Component{
    constructor(props){
        super(props)
        this.state={
            vehicleId:'0',
            startTime:'2019-08-06 00:00:00',
            endTime:'2019-08-06 17:23:27',
        }
       }
       selectplateCode(val){
           this.setState({
            plateCode:val.value,
            color:'red'
        })
       }
       Tokenclick(item){
           this.props.dispatch(historicalrack())
       }
       setstartTime(val){
        this.setState({
            startTime:val
        })
       }
       setendTime(val,v){
        this.setState({
            endTime:val
        })
       }
       render(){
        return (
           <View style={styles.Historicalrack}>
               <View style={styles.Tool}>
               
                <View style={{width:'30%' ,backgroundColor: 'powderblue'}} >
                    <Text>车牌</Text>
                    <FlatList style={styles.height}
                        data={[
                            {key: '云AG6001',value:'4834134770813088'},
                            {key: 'Jackson',value:'1'},
                            {key: 'James',value:'2'},
                            {key: 'Joel',value:'0'},
                            {key: 'John',value:'0'},
                            {key: 'Jillian',value:'0'},
                            {key: 'Jimmy',value:'0'},
                            {key: 'Julie',value:'0'},
                        ]}
                        renderItem={({item} ) => <Text style={{color:this.state.plateCode==item.value?'red':'#000'}} onPress={this.selectplateCode.bind(this,item)} >{item.key}</Text>}
                    />
                </View>
                <View style={{width: '30%',  backgroundColor: 'skyblue'}} >
                <Text>日期</Text>
                <TextInput 
                        onChangeText={this.setstartTime.bind(this)}
                        value={this.state.startTime}
                    />
                   <TextInput 
                        onChangeText={this.setendTime.bind(this)}
                        value={this.state.endTime}
                    />
                </View>
                <View style={{width:'30%',backgroundColor: 'steelblue'}} >
                    <Text>{this.state.plateCode}ssss</Text>
                <Button
                    title="Details2" onPress={this.Tokenclick.bind(this)}
                /> 
                </View>
        
                 
               </View>
               <MapView style={styles.Map}/>

           </View>
        ) 
    }
}

const styles = StyleSheet.create({
    Historicalrack:{
        width:screen.screenW,
        height:screen.screenH
    },
    color0:{
        color:'#000',
    },
    colorr:{
        color:'red',
    },
    Map: {
      height:'85%', 
      width:'100%',
    },
    Tool: {
     
      backgroundColor:'pink',
      width:'100%',
      flex: 1, 
      justifyContent:"space-between",
      flexDirection: 'row'
    },
    width:{
        width:'30%',
    },
    height:{
        height:'80%',
    }
  });
export default connect((store)=>{
    return {store:store.historicalrack}
  })(Historicalrack)