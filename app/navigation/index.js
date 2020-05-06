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
      <Stack.Screen
        name="eat"
        component={eat}
        options={{title: '健康膳食'}}
      />
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
        tabStyle : {
          backgroundColor: '#ddd',
          paddingBottom: 15,
          borderRightWidth: 1,
          borderRightColor: '#fff'
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
