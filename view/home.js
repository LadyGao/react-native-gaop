import React from 'react';
import { connect } from 'react-redux';
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    Button,Image,
    View,
    Text,
    StatusBar,
  } from 'react-native';
  import {getToken,getMenu} from '../actions/login' 
  import http from '../utils/http.js'
  import { ListItem } from 'react-native-elements' 
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = { text: 'true' }
    }
            // componentWillMount(){   
    //     this.props.dispatch(getToken())
    // }
    // componentDidUpdate(){
    //     if(this.props.store.token){ 
    //         this.props.navigation.navigate('car')
    //     }
    // }
    /**
     * 请求菜单
     */
    Tokenclick(){
        http({
            url:'/basic/resource/getCurrentUserTree',
        }).then(res=>{
            if(res){
                this.props.dispatch(getMenu(res))
                this.props.navigation.navigate('car')
            }   
        })
       
        this.setState({
            text:'false'
        })
    } 
    setInput(val){
       
    }
    render(){
        return (
            <View>  

<ListItem checkmark
      title='Limited supply! Its like digital gold!'
      subtitle={
        <View style={styles.subtitleView}>
          <Text style={styles.ratingText}>5 months ago</Text>
          <Text style={styles.ratingText}>5 months ago</Text>
          <Text style={styles.ratingText}>5 months ago</Text>
          <Text style={styles.ratingText}>5 months ago</Text>
          <Text style={styles.ratingText}>5 months ago</Text>
          <Text style={styles.ratingText}>5 months ago</Text>
        </View>
      }
      leftAvatar={{ source: require('../asset/img/qq.png') }}
    />
            <Text>Homeddd</Text>
            <Text>{this.props.store.mapType}</Text>
            <Text>{this.state.text}</Text>
            <TextInput 
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={this.setInput}
        value={this.state.text}
      />
            <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={this.setInput}
        value={this.state.text}
      />
            <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={this.setInput}
        value={this.state.text}
      />
            <Button
            title="Details2" onPress={this.Tokenclick.bind(this)}
          />
          </View>)
    }
}
styles = StyleSheet.create({
    subtitleView: {
      flexDirection: 'row',
      paddingLeft: 10,
      paddingTop: 5
    },
    ratingImage: {
      height: 19.21,
      width: 100
    },
    ratingText: {
      paddingLeft: 10,
      color: 'grey'
    }
  })
export default connect((store)=>{
    return {store:store.login}
  })(Home)