import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';

export default class fangan extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.boxLarge} >
            <Text style={[styles.text, styles.topStatus]}>西红柿炒鸡蛋:【材料】：鸡蛋4枚、西红柿2个、白糖少许、清水少许、油适量、盐适量。</Text>
        </View >
        <View style={styles.boxLarge} >
            <Text style={[styles.text, styles.topStatus]}>酸辣土豆丝:【材料】：土豆 500克 干辣椒 2个 香菜梗 3克 辅料 大蒜 5克 盐 3/4小勺 大葱 5克 味精 1/4小勺 陈醋 1大勺。</Text>
        </View >
        <View style={styles.boxLarge} >
            <Text style={[styles.text, styles.topStatus]}>紫菜蛋花汤:【材料】：鸡蛋1个，紫菜2张，葱1支、盐、香油各1匙。</Text>
        </View >
        <View style={styles.boxLarge} />
        <View style={styles.boxLarge} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxLarge: {
    width: 500,
    height: 200,
    marginBottom: 10,
    backgroundColor: 'steelblue',
  },
  text: {
    color: '#000',
    fontSize: 20,
    lineHeight: 40,
  },
  topStatus: {
    marginTop: 25,
  },
});
