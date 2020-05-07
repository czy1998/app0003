import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default class qingdan extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => this.props.navigation.navigate('qingdan')}>
          <Text style={[styles.buttonText]}>土豆+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => this.props.navigation.navigate('qingdan')}>
          <Text style={[styles.buttonText]}>白菜+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => this.props.navigation.navigate('qingdan')}>
          <Text style={[styles.buttonText]}>西红柿+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => this.props.navigation.navigate('qingdan')}>
          <Text style={[styles.buttonText]}>青椒+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    height: 50,
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ae9373',
    backgroundColor: '#f5f5f5',
    marginBottom: 6,
  },
  buttonText: {
    color: '#ae9373',
    fontSize: 20,
    lineHeight: 40,
    textAlign: 'center',
  },
  dibu: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
