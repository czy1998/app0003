import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';

export default class fangan extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.boxLarge}>
          <Text style={[styles.text, styles.topStatus]}>
            1、利用吹风机撕标签：买礼物送人时，价格标签很难撕干净，这时可以用吹风机吹热标签，标签就会被轻松撕下。
          </Text>
        </View>
        <View style={styles.boxLarge}>
          <Text style={[styles.text, styles.topStatus]}>
            2、冬天洗澡后喝温水：冬天洗完澡后，要记得将头发吹干，并且喝一杯温水，这样有助于恢复体温和防止感冒。
          </Text>
        </View>
        <View style={styles.boxLarge}>
          <Text style={[styles.text, styles.topStatus]}>
            3、用水果去除车里异味：车子开久了，空调内会散发出一股异味，可以在车内放置两个苹果或两个切开的柠檬，水果散发的果香味能够掩盖并去除车内异味。
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
