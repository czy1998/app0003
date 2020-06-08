import React, {Component} from 'react';
import { Image, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
//主页和个人页面
import home from '../views/home';
import me from '../views/me';
//主界面三个按钮界面
import eat from '../views/eat';
import health from '../views/health';
import message from '../views/message';
///健康档案---
import pinggu from '../views/health/pinggu';
import mubiao from '../views/health/mubiao';
import xinxi from '../views/health/xinxi';
//打卡记录---
import qiandao from '../views/message/qiandao';
import shuju from '../views/message/shuju';
//饮食记录---
import fangan from '../views/eat/fangan';
import jilu from '../views/eat/jilu';
import neirong from '../views/eat/neirong';
import qingdan from '../views/eat/qingdan';
import chakan from '../views/eat/chakan';
//登陆页面---
import Denglu from '../views/signup/denglu';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        },
      }}>
      
      <Stack.Screen
        name="home"
        component={MyTabs}
        options={{
          title: '养生小助手',
          headerRight: () => (
            <TouchableOpacity onPress={() => {alert('健康小助手分为三大功能：健康档案、打卡记录、饮食记录')}}>
              <Image
                style={{width: 36, height: 36, marginRight: 5}}
                source={require('../src/tixing.png')}
              />
            </TouchableOpacity>
          ),
        }}
      />

      {/*主界面三个按钮界面*/}
      <Stack.Screen name="health" component={health} options={{title: '健康档案'}} />
      <Stack.Screen name="message" component={message} options={{title: '打卡记录'}} />
      <Stack.Screen name="eat" component={eat} options={{title: '饮食记录'}} />
      {/*健康档案---*/}
      <Stack.Screen name="xinxi" component={xinxi} options={{title: '基本信息'}} />
      <Stack.Screen name="pinggu" component={pinggu} options={{title: '健康评估'}} />
      <Stack.Screen name="mubiao" component={mubiao} options={{title: '设定目标'}} />
      {/*打卡记录---*/}
      <Stack.Screen name="qiandao" component={qiandao} options={{title: '签到打卡'}} />
      <Stack.Screen name="shuju" component={shuju} options={{title: '统计数据'}} />
      {/*饮食记录---*/}
      <Stack.Screen name="fangan" component={fangan} options={{title: '饮食方案'}} />
      <Stack.Screen name="jilu" component={jilu} options={{title: '记录饮食'}} />
      <Stack.Screen name="chakan" component={chakan} options={{title: '查看记录'}} />
      <Stack.Screen name="qingdan" component={qingdan} options={{title: '饮食列表'}} />
      <Stack.Screen name="neirong" component={neirong} options={{title: '详细信息'}} />
      {/*个人界面---*/}
      <Stack.Screen name="me" component={me} options={{title: '个人界面'}} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
        tabStyle: {
          borderRightWidth: 2,
          borderRightColor: '#ddd',
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'me') {
            if (focused) {
              return <Image style={styles.tabBarIcon} source={require('../src/me-active.png')} />;
            } else {
              return <Image style={styles.tabBarIcon} source={require('../src/me-inactive.png')} />;
            }
          } else if (route.name === 'home') {
            if (focused) {
              return <Image style={styles.tabBarIcon} source={require('../src/home-active.png')} />;
            } else {
              return (
                <Image style={styles.tabBarIcon} source={require('../src/home-inactive.png')} />
              );
            }
          }
        },
      })}>
      <Tab.Screen
        name="home"
        component={home}
        options={{
          tabBarLabel: '主页',
        }}
      />
      <Tab.Screen
        name="me"
        component={me}
        options={{
          tabBarLabel: '我',
        }}
      />
    </Tab.Navigator>
  );
}
export default class index extends Component {
  state = {
    logined:false,
    user:null
  }
  componentDidMount() {
    AsyncStorage.getItem('user')
     .then((data)=>{
       let user
       let newState={}
       if(data){
         user=JSON.parse(data)
       }
       if(user&&user.accessToken){
        newState.user=user
        newState.logined=true
       }else{
        newState.logined=false
       }
       this.setState(newState)
     })
  }
  afterLogin=(user)=>{
    user=JSON.stringify(user)
    AsyncStorage.setItem('user', user)
    .then(()=>{
      this.setState({
        logined:true,
        user:user
      })
    })
  }
  render() {
    if(!this.state.logined){
      return <Denglu afterLogin={this.afterLogin} />
    }
    
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  tabBarIcon: {
    width: 25,
    height: 25,
  },
});
