import React from 'react';
import {
  Image,
    StyleSheet,
    View,
    ScrollView,
    Text,
    FlatList,
  } from 'react-native';
  import { Button, SocialIcon ,ListItem  ,Icon  } from 'react-native-elements';
  import { connect } from 'react-redux';
  import {changetMenu} from '../../actions/login.js'
class Menu extends React.Component {
    constructor(props){   
        super(props)
        this.state={
        }
    }   
  
    render() {
        var that=this
       /**
        * 菜单的渲染
        * @param {*} menu 
        */
        function renderItme(menu){   
           return  menu.map((l,i)=>{ 
             let FLAG=typeof l.actionCode=='object'|| l.href
               return FLAG? 
                 (<ListItem style={styles.Listmenu}
                    onPress={()=>{changeChvron(l)}}
                            chevron={l.chevron}
                            key={i}
                            title={l.name}
                            subtitle={
                                l.children?( 
                                    <View> 
                                       {l.chevron?null:renderItme(l.children)}
                                    </View> 
                                ): 
                                null
                            }
                        />):
                    null
            })
        }
 
        /**
         * 修改菜单打开收起状态 
         * @param {选中的菜单} item 
         */
        function changeChvron(item){
           let storeMenu=  findItme(that.props.store.menu,item.id) 
            that.props.dispatch(changetMenu(storeMenu))
            //跳转页面
            item.href&&that.props.routerGo(item.href)
        }
        /**
         * 找到菜单iD修改图标状态
         * @param {*} menu 
         * @param {*} id 
         */
        function findItme(menu,id){ 
           return menu.filter(item=>{
                if( item.id==id){
                  if(!item.href){
                    item.chevron=!item.chevron
                  }
                   return item
                }else{
                    if(item.children){
                        item1= findItme(item.children,id)
                        return item1 
                    }
                }
               
            })
        }
      return (
          <ScrollView style={styles.menu}>
             { 
               renderItme(this.props.store.menu)
             }
        </ScrollView>
         
      );  
    } 
  }


  const styles = StyleSheet.create({
    menu: {
      width:400
    },
    Listmenu: {
      
      backgroundColor:'red',
    }
  });
 
export default connect((store)=>{
    return {store:store.login}
  })(Menu)