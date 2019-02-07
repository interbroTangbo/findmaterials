
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Alert} from 'react-native';
import {createStore,combineReducers,applyMiddleware} from 'redux'
import {Provider,connect} from 'react-redux'
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import AppContainer from './NavihationConfig';

const apiClient = axios.create({
  baseURL : 'http://localhost:3000/',
  responseType:'json'
})

const GET_VALUES_SUCCESS = 'refresh_SUCCESS';

function mapStateToProps(state){
  return {
     value : state.value
  }
}

function mapDispatchToProps(dispatch){
    return {
        onRefresh : ()=> dispatch({
          type: 'refresh',
          payload: {
            request:{
              url:'/hello'
            }
          }
        })
    }
}


function reducer(state={value:1},action){
   let value = state.value
    switch(action.type){
      case GET_VALUES_SUCCESS:
       return {
         value : action.payload.data.hello
       };
      default:
      return state; 
    }
}

const store = createStore(reducer,applyMiddleware(axiosMiddleware(apiClient)))
store.subscribe(()=>{
  console.log(store.getState())
})


class TodoList extends Component{
    render(){
      return(
        <View>
          <Text>{this.props.value}</Text>
          <Button title="Refresh" onPress={this.props.onRefresh}/>
        </View>
      )
    }
}

const TODO = connect(
  mapStateToProps,mapDispatchToProps
)(TodoList)


// const Action = {
//   type: 'inCreass',
// }

// function counter(state={count:0},action){
//   const count = state.count
//   switch(action.type){
//     case 'inCreass':
//      return {count: count +1}
//     case 'inDreass' : 
//      return {count : count - 1}
//     default:
//      return state 
//   }
// }

// function mapStateToProps(state){
//   return {
//      value : state.counter.count
//   }
// }

// function mapDispatchToProps(dispatch){
//     return {
//         onIncress : () => dispatch(Action),
//         onDreass : () => dispatch({
//           type:'inDreass'
//         })
//     }
// }

// class TodoList extends Component{
//     render(){
//       return(
//         <View>
//           <Text>{this.props.value}</Text>
//           <Button title="incress" onPress={this.props.onIncress}/>
//           <Button title="inDreass" onPress={this.props.onDreass}/>
//         </View>
//       )
//     }
// }

// const reducers = combineReducers({
//   counter
// })

// const store = createStore(reducers)

// const TODO = connect(
//   mapStateToProps,mapDispatchToProps
// )(TodoList)




export default class App extends Component{
  render() {
    return (
       <Provider store={store}>
        <AppContainer />
       </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
