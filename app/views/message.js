import React, {Component} from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import {  Button  } from 'react-native-elements';

const screenWidth = Math.round(Dimensions.get('window').width);
export default class health extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor:'white'}}>
        <Image
          style={{width: screenWidth, height: 300, resizeMode:'contain', marginBottom: 40}}
          source={require('../src/qiandao.png')}
        />
        <View
          style={{
            alignItems: 'center',
          }}>
            <Button 
            titleStyle={{fontSize:40}}
            type="outline"
            title='签到打卡'
            onPress={() => {this.props.navigation.navigate('qiandao')}}>
          </Button>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Button 
            titleStyle={{fontSize:40}}
            type="outline"
            title='统计数据'
            onPress={() => this.props.navigation.navigate('shuju')}>
          </Button>
        </View>
      </View>
    );
  }
}
