import React, {Component} from 'react';
import {Text, View, Image, Dimensions, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {Input, Button} from 'react-native-elements';

const LABEL = '@app/isLogin';
const screenWidth = Math.round(Dimensions.get('window').width);
export default class denglu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  componentDidMount() {
    AsyncStorage.getItem(LABEL, (isLogin) => {
      console.log(isLogin);
      if (+isLogin) this.props.navigation.navigate('home');
    });
  }
  test = () => {
    fetch('http://192.168.1.2:1234/u/test', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          success: responseData.success,
        });
        if (!this.state.username || !this.state.password) {
          alert(`注册失败,账号和密码不能为空！`);
        } else if (this.state.success === true) {
          alert(`注册成功！`);
        } else if (this.state.success === false) {
          alert(`注册失败,该账户已存在！`);
        }
      });
  };
  denglu = () => {
    fetch('http://192.168.1.2:1234/u/denglu', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then(async (responseData) => {
        await AsyncStorage.setItem(LABEL, '1');
        console.log(await AsyncStorage.getItem(LABEL));
        const isSuccess = responseData.success;
        this.setState(
          {
            success: isSuccess,
          },
          () => {
            if (isSuccess === true) {
              alert(`登陆成功！`);
              this.props.navigation.navigate('home', {data: responseData.data});
            } else if (isSuccess === false) {
              alert(`登陆失败！`);
            }
          }
        );
      });
  };
  render() {
    return (
      <View>
        <Image
          style={{width: screenWidth, height: 300, resizeMode: 'cover'}}
          source={require('../../src/signup.png')}
        />
        <View>
          <View style={styles.view1}>
            <Text style={[styles.text, styles.topStatus]}>账号：</Text>
            <View style={styles.flex}>
              <View style={[styles.flexDirection, styles.inputHeight, styles.topStatus]}>
                <View style={styles.flex}>
                  <Input
                    style={styles.input}
                    placeholder="请输入账号"
                    onChangeText={(text) => this.setState({username: text})}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.view1}>
            <Text style={[styles.text, styles.topStatus]}>密码：</Text>
            <View style={styles.flex}>
              <View style={[styles.flexDirection, styles.inputHeight, styles.topStatus]}>
                <View style={styles.flex}>
                  <Input
                    style={styles.input}
                    placeholder="请输入密码"
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({password: text})}
                  />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Button
              Style={{margin: 10, padding: 20}}
              titleStyle={{fontSize: 40}}
              type="outline"
              title="注册"
              onPress={() => this.test()}></Button>
            <Button
              Style={{margin: 10, padding: 20}}
              titleStyle={{fontSize: 40}}
              type="outline"
              title="登陆"
              onPress={() => this.denglu()}></Button>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 80,
  },
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
    marginLeft: 5,
    fontSize: 25,
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
