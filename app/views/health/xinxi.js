import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

export default class xinxi extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            height: 80,
          }}>
          <Text style={[styles.text, styles.topStatus]}>性别：</Text>
          <View style={styles.flex}>
            <View
              style={[
                styles.flexDirection,
                styles.inputHeight,
                styles.topStatus,
              ]}>
              <View style={styles.flex}>
                <TextInput
                  style={styles.input}
                  placeholder="请输入性别"
                  onChangeText={(text) => this.setState({text})}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            height: 80,
          }}>
          <Text style={[styles.text, styles.topStatus]}>身高：</Text>
          <View style={styles.flex}>
            <View
              style={[
                styles.flexDirection,
                styles.inputHeight,
                styles.topStatus,
              ]}>
              <View style={styles.flex}>
                <TextInput
                  style={styles.input}
                  placeholder="请输入身高"
                  onChangeText={(text) => this.setState({text})}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            height: 80,
          }}>
          <Text style={[styles.text, styles.topStatus]}>体重：</Text>
          <View style={styles.flex}>
            <View
              style={[
                styles.flexDirection,
                styles.inputHeight,
                styles.topStatus,
              ]}>
              <View style={styles.flex}>
                <TextInput
                  style={styles.input}
                  placeholder="请输入体重"
                  onChangeText={(text) => this.setState({text})}
                />
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('pinggu')}>
          <Text style={styles.text}>健康评估</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 50,
    marginTop: 40,
    marginLeft: 20,
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ae9373',
    backgroundColor: '#f5f5f5',
  },
  text: {
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
});
