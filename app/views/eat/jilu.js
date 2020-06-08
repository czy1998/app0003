import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {  Button  } from 'react-native-elements';

export default class jilu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success1: false,
      success2: false
    };
  }

  deleteOne=()=>{
    fetch('http://192.168.1.2:1234/u/deleteOne')
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          success1: responseData.success,
        });
      });
  }
  delete=()=>{
    fetch('http://192.168.1.2:1234/u/delete')
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          success2: responseData.success,
        });
      });
  }
  render() {
    return (
      <View style={styles.dibu}>
        <Button 
            titleStyle={{fontSize:30}}
            containerStyle={{marginTop:10, marginHorizontal:20}}
            type="outline"
            title='添加饮食'
            onPress={() => this.props.navigation.navigate('qingdan')}></Button>
        <Button 
            titleStyle={{fontSize:30}}
            containerStyle={{marginTop:10, marginHorizontal:20}}
            type="outline"
            title='删除一条饮食'
            onPress={() => this.deleteOne()}></Button>
        <Button 
            titleStyle={{fontSize:30}}
            containerStyle={{marginTop:10, marginHorizontal:20}}
            type="outline"
            title='清空列表'
            onPress={() => this.delete()}></Button>  
        <Button 
            titleStyle={{fontSize:30}}
            containerStyle={{marginTop:10, marginHorizontal:20, marginBottom:10}}
            type="outline"
            title='查看记录'
            onPress={() => this.props.navigation.navigate('chakan')}></Button>      
      </View>
    );
  }
}
const styles = StyleSheet.create({
  dibu: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor:'white'
  },
});
