import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import eat from '../views/eat';
import health from '../views/health';
import home from '../views/home';
import me from '../views/me';
import shenghuo from '../views/shenghuo';
import xinli from '../views/xinli';
import xinxi from '../views/health/xinxi';
import pinggu from '../views/health/pinggu';
import mubiao from '../views/health/mubiao';
import fangan from '../views/eat/fangan';
import jilu from '../views/eat/jilu';
import jinji from '../views/eat/jinji';
import qingdan from '../views/eat/qingdan';
import kaixin from '../views/xinli/kaixin';
import riji from '../views/xinli/rij';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={MyTabs}
        options={{title: '养生小助手'}}
      />
      <Stack.Screen
        name="health"
        component={health}
        options={{title: '健康档案'}}
      />
      <Stack.Screen name="eat" component={eat} options={{title: '健康膳食'}} />
      <Stack.Screen
        name="xinli"
        component={xinli}
        options={{title: '心理模块'}}
      />
      <Stack.Screen
        name="shenghuo"
        component={shenghuo}
        options={{title: '生活技巧'}}
      />
      <Stack.Screen
        name="mubiao"
        component={mubiao}
        options={{title: '设定目标'}}
      />
      <Stack.Screen
        name="pinggu"
        component={pinggu}
        options={{title: '健康评估'}}
      />
      <Stack.Screen
        name="xinxi"
        component={xinxi}
        options={{title: '基本信息'}}
      />
      <Stack.Screen
        name="fangan"
        component={fangan}
        options={{title: '饮食方案'}}
      />
      <Stack.Screen
        name="jilu"
        component={jilu}
        options={{title: '记录饮食'}}
      />
      <Stack.Screen
        name="jinji"
        component={jinji}
        options={{title: '禁忌搭配'}}
      />
      <Stack.Screen
        name="qingdan"
        component={qingdan}
        options={{title: '饮食目录'}}
      />
      <Stack.Screen
        name="kaixin"
        component={kaixin}
        options={{title: '开心一笑'}}
      />
      <Stack.Screen
        name="riji"
        component={riji}
        options={{title: '心情日记'}}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        tabStyle: {
          backgroundColor: '#ddd',
          paddingBottom: 15,
          borderRightWidth: 1,
          borderRightColor: '#fff',
        },
      }}>
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
  render() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}
