import { 
    createSwitchNavigator, 
    createStackNavigator, 
    createAppContainer } from 'react-navigation';
import {
    createMaterialBottomTabNavigator
}   from 'react-navigation-material-bottom-tabs' ;


import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Icon } from 'native-base';

class Album extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Text> Album </Text>
            </View>
        )
    }
}

class Library extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Text> Library </Text>
            </View>
        )
    }
}

class History extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Text> History </Text>
            </View>
        )
    }
}

class Cart extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Text> Cart </Text>
            </View>
        )
    }
}


const TabBottomNavigator = createMaterialBottomTabNavigator({
    Album: { 
        screen: Album ,
        navigationOptions:({navigation})=>({
            tabBarColor:"yellow",
            tabBarIcon:(<Icon name='home' />),
            tabBarLabel:"Test"
        })
    },
    Library: { 
        screen: Library,
        navigationOptions:({navigation})=>({
            tabBarColor:"red"
        })
    },
    History: { 
        screen: History,
        navigationOptions:({navigation})=>({
            tabBarColor:"blue"
        })
    },
    Cart: { screen: Cart ,
        navigationOptions:({navigation})=>({
            tabBarColor:"green"
        })},
},{
  initialRouteName: 'Album',
  activeColor: '#000',
  inactiveColor: '#fff',
  barStyle: { backgroundColor: '#fff',height:60},
  shifting:true,
  labeled:true,
});

export default createAppContainer(TabBottomNavigator);


