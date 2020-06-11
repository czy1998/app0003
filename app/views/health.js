import React, {Component} from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import {  Button  } from 'react-native-elements';

const screenWidth = Math.round(Dimensions.get('window').width);
export default class health extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor:'white'}}>
        <Image
          style={{width: screenWidth, height: 300, resizeMode:'cover', marginBottom: 40}}
          source={require('../src/jilu.jpg')}
        />
        <View
          style={{
            alignItems: 'center',
          }}>
            <Button 
            titleStyle={{fontSize:40}}
            type="outline"
            title='基本信息'
            onPress={() => this.props.navigation.navigate('xinxi')}>
          </Button>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Button 
            titleStyle={{fontSize:40}}
            type="outline"
            title='健康评估'
            onPress={() => this.props.navigation.navigate('pinggu')}>
          </Button>
          {/*
          <Button 
            Style={{}}
            titleStyle={{fontSize:40}}
            type="outline"
            title='设定目标'
            onPress={() => this.props.navigation.navigate('mubiao')}>
          </Button>
          */}
        </View>
      </View>
    );
  }
}
