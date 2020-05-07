import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';

export default class fangan extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
            <Text style={[styles.text, styles.topStatus]}>1、猪肉+菱角，会引起肚子痛；</Text>
            <Text style={[styles.text, styles.topStatus]}>2、白酒+柿子，会引起中毒；</Text>
            <Text style={[styles.text, styles.topStatus]}>3、牛肉+粟子，会引起呕吐；</Text>
            <Text style={[styles.text, styles.topStatus]}>4、洋葱+蜂蜜，会伤眼睛；</Text>
            <Text style={[styles.text, styles.topStatus]}>5、羊肉+西瓜，会伤元气；</Text>
            <Text style={[styles.text, styles.topStatus]}>6、萝卜+木耳，会引起皮炎；</Text>
            <Text style={[styles.text, styles.topStatus]}>7、豆腐+蜂蜜，会引起耳聋；</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#679',
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
