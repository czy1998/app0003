import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

export default class me extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
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
          <Text style={[styles.text, styles.margintop]}>昵称：</Text>
          <View style={styles.flex}>
            <View style={[styles.flexDirection, styles.inputHeight, styles.margintop]}>
              <View style={styles.flex}>
                <TextInput
                  style={styles.input}
                  returnKeyType="search"
                  placeholder="请输入昵称"
                  onChangeText={(text) => this.setState({text})}
                />
              </View>
              <View style={styles.btn}>
                <Text style={styles.search} onPress={this.search.bind(this)}>
                  确定
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  search() {
    alert('您输入的昵称为：' + this.state.text);
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
  flex: {
    flex: 1,
  },
  flexDirection: {
    flexDirection: 'row',
  },
  topStatus: {
    marginTop: 25,
  },
  inputHeight: {
    height: 45,
  },
  input: {
    height: 45,
    borderWidth: 1,
    marginLeft: 5,
    paddingLeft: 5,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  btn: {
    width: 55,
    marginLeft: -5,
    marginRight: 5,
    backgroundColor: '#23BEFF',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  margintop: {
    marginTop: 20,
  },
});
