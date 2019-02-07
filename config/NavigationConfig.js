import { 
    createSwitchNavigator, 
    createStackNavigator,
    createBottomTabNavigator, 
    createAppContainer } from 'react-navigation';
import { TouchableRipple } from 'react-native-paper';
import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Icon} from 'native-base';

class Message extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
              <Text style={{fontFamily:'NotoSansKR-Bold'}}> Message </Text>
            </View>
        )
    }
}

class RequestList extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
              <Text> RequestList </Text>
            </View>
        )
    }
}

class FindMaterials extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
              <Text> FindMaterials </Text>
            </View>
        )
    }
}

class Map extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
              <Text> Map </Text>
            </View>
        )
    }
}

class MyInfmation extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
              <Text> MyInfmation </Text>
            </View>
        )
    }
}

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let color = focused ? 'yellow' : 'black';
    if (routeName === '메시지') {
      return <Icon name='mail' type="Feather" style={{color:`${color}`}}/>
    } 
    else if (routeName === '요청목록') {
      return <Icon name='file-text' style={{color:`${color}`}} type="Feather"/>
    }
    else if (routeName === '자재찾기') {
        return <Icon name='zoom-in' style={{color:`${color}`}} type="Feather"/>
    }
    else if (routeName === '지도') {
        return <Icon name='map-pin' style={{color:`${color}`}} type="Feather"/>
    }
    else if (routeName === '내 정보') {
        return <Icon name='user' style={{color:`${color}`}} type="Feather"/>
    }
  };


const TabBottomNavigator = createBottomTabNavigator({
       "메시지": { 
            screen: Message ,
                navigationOptions:({navigation})=>({
                    title:"메시지"
                })
            },
       "요청목록": { 
            screen: RequestList,
            navigationOptions:({navigation})=>({
                title:"요청목록"
            })
        },
        "자재찾기": { 
            screen: FindMaterials,
            navigationOptions:({navigation})=>({
                title:"자재찾기"
            })
        },
        "지도": { screen: Map ,
            navigationOptions:({navigation})=>({
                title:"지도"
        })},
        "내 정보": { screen: MyInfmation ,
            navigationOptions:({navigation})=>({
                title:"내 정보"
        })}

  }, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'black',
      style:{height:60}
    },
  })



export default createAppContainer(TabBottomNavigator);


