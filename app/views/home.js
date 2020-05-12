import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={{paddingTop: 15}}>
          欢迎使用健康小助手，在这里你可以培养出一个健康的生活习惯！
        </Text>
        <Image
          style={{width: screenWidth, height: 300}}
          source={require('../src/jk.png')}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            height: 80,
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('health')}>
            <Text style={styles.buttonText}>健康档案</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('eat')}>
            <Text style={styles.buttonText}>健康膳食</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            height: 80,
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('xinli')}>
            <Text style={styles.buttonText}>心理模块</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('shenghuo')}>
            <Text style={styles.buttonText}>生活技巧</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 50,
    marginTop: 40,
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ae9373',
    backgroundColor: '#f5f5f5',
  },
  buttonText: {
    color: '#ae9373',
    fontSize: 20,
    lineHeight: 40,
    textAlign: 'center',
  },
});
