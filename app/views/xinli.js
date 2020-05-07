import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default class health extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Image
          style={{width: 410, height: 300}}
          source={require('../src/xl.png')}
        />
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('kaixin')}>
            <Text style={styles.buttonText}>开心一笑</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('riji')}>
            <Text style={styles.buttonText}>心情日记</Text>
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
