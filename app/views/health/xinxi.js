import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import {Input, Button} from 'react-native-elements';

const screenWidth = Math.round(Dimensions.get('window').width);
export default class xinxi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: '',
      height: '',
      weight: '',
      success:false
    };
  }
  senddata=()=>{
    fetch('http://192.168.1.2:1234/u/xinxi', {
      method: 'POST',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
      body: JSON.stringify({
      height: this.state.height,
      weight: this.state.weight,
    }),
  }).then(response => response.json())
    .then(responseData => {
        this.setState({
          success:responseData.success,
        });
        if(this.state.success===true){
          alert(`提交成功，您的体重是${this.state.weight}KG，身高是${this.state.height}cm`)
        }
      });
  }
  render() {
    return (
      <View style={{backgroundColor:'white', flex:1, paddingTop:20, paddingHorizontal:20}}>
        <Image
          style={{width: screenWidth, height: 250, resizeMode:'contain', marginBottom: 40}}
          source={require('../../src/xx.png')}
        />
        <View style={styles.view1}>
          <Text style={[styles.text, styles.topStatus]}>性别：</Text>
          <View style={styles.flex}>
            <View style={[styles.flexDirection, styles.inputHeight, styles.topStatus]}>
              <View style={styles.flex}>
                <Input
                  style={styles.input}
                  placeholder="请输入性别"
                  onChangeText={(text) => this.setState({gender: text})}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.view1}>
          <Text style={[styles.text, styles.topStatus]}>身高：</Text>
          <View style={styles.flex}>
            <View style={[styles.flexDirection, styles.inputHeight, styles.topStatus]}>
              <View style={styles.flex}>
                <Input
                  style={styles.input}
                  placeholder="请输入身高"
                  onChangeText={(text) => this.setState({height: text})}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.view1}>
          <Text style={[styles.text, styles.topStatus]}>体重：</Text>
          <View style={styles.flex}>
            <View style={[styles.flexDirection, styles.inputHeight, styles.topStatus]}>
              <View style={styles.flex}>
                <Input
                  style={styles.input}
                  placeholder="请输入体重"
                  onChangeText={(text) => this.setState({weight: text})}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Button
            Style={{margin: 10, padding: 20}}
            titleStyle={{fontSize: 40}}
            type="outline"
            title="提交信息"
            onPress={() => this.senddata()}></Button>
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
