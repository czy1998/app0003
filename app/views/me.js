import React, {Component} from 'react';
import { Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import {Input, Button} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

const screenWidth = Math.round(Dimensions.get('window').width);

export default class me extends Component {
  state = {
    nickname: '',
    age: '',
    Img:''
  };
  componentDidMount() {
    AsyncStorage.getItem('user')
     .then((data)=>{
       let user
       if(data){
         user=JSON.parse(data)
       }
       if(user&&user.accessToken){
        this.setState({
          nickname:user.nickname,
          age:user.age,
          Img:user.avatar
        })
       }
     })
  }
  //flexDirection: 'row', justifyContent: 'space-between',
  render() {
    return (
      <View style={{flex:1, backgroundColor:'white'}}>
        <View
          style={{ height: 200}}>
          <Image 
            style={{width: screenWidth, height: 200, position:'absolute', resizeMode: 'cover'}}
            blurRadius={8}
            source={{uri:this.state.Img?this.state.Img:null}}/>
          <View style={{flex:1, justifyContent:'space-around', flexDirection: 'row', paddingTop:40}}>
              <Image style={{width: 110, height: 110, borderRadius:30}}
              source={{uri:this.state.Img?this.state.Img:null}}/>
              <View>
                <Text style={{fontSize:20, marginTop:20}}>坚持每日打卡</Text>
                <Text style={{fontSize:20, marginTop:20}}>幸福快乐生活</Text>
              </View>
          </View>
        </View>
        <View style={styles.view1}>
          <Text style={[styles.text, styles.topStatus]}>昵称：</Text>
          <View style={styles.flex}>
            <View style={[styles.flexDirection, styles.inputHeight, styles.topStatus]}>
              <View style={styles.flex}>
                <Input
                  style={styles.input}
                  placeholder={this.state.nickname}
                  onChangeText={(text) => this.setState({nickname: text})}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.view1}>
          <Text style={[styles.text, styles.topStatus]}>年龄：</Text>
          <View style={styles.flex}>
            <View style={[styles.flexDirection, styles.inputHeight, styles.topStatus]}>
              <View style={styles.flex}>
                <Input
                  style={styles.input}
                  placeholder={this.state.age}
                  onChangeText={(text) => this.setState({age: text})}
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
            title="更新信息"
            onPress={() => {alert('更新成功')}}></Button>
          <Text></Text>
          
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
    marginHorizontal: 20,
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
    paddingLeft: 5,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

/* const styles = StyleSheet.create({
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
 */
