import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';

export default class fangan extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.boxLarge}>
          <Text style={[styles.text, styles.topStatus]}>
            1、表白
            一个男生暗恋一个女生很久了。一天自习课上，男生偷偷的传了小纸条给女生，上面写着“其实我注意你很久了”。不一会儿，女生传了另一张纸条，男生心急火燎的打开一看“拜托你不要告诉老师，我保证以后再也不嗑瓜子了”。。。。。。男生一脸懵逼
          </Text>
        </View>
        <View style={styles.boxLarge}>
          <Text style={[styles.text, styles.topStatus]}>
            逛商场，一个大妈拉着我说：“闺女，我想给我闺女买件衣服，我看你跟我闺女身材差不多，你替我闺女试试吧。”
            看着大妈肯切的眼神，我只好答应，跟着大妈来到了一家孕婴专柜。。。
          </Text>
        </View>
        <View style={styles.boxLarge}>
          <Text style={[styles.text, styles.topStatus]}>
            朋友出了点事，找我帮他支招。
            我：这件事，从她的角度来说。。。(省略三百字) 他：确有此理！
            我：从你的角度来说。。。(省略三百字)
            他：更有此理！那从你的角度来说呢？
            我：从我的角度来说？？？关我屁事！
          </Text>
        </View>
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
    width: 412,
    height: 300,
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
