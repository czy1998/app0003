import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default class me extends Component {
  
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            height: 80,
          }}>
          <Text style={styles.text}>头像：</Text>
          <Image
            style={{width: 70, height: 70}}
            source={require('../src/tx.png')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            height: 80,
          }}>
          <Text style={styles.text}>昵称：</Text>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    marginTop: 30,
    color: '#ae9373',
    fontSize: 20,
    lineHeight: 40,
    textAlign: 'center',
  },
});
