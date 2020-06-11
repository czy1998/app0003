import React, {Component} from 'react';
import { View,  Image, Dimensions } from 'react-native';
import { Text, Button  } from 'react-native-elements';

const screenWidth = Math.round(Dimensions.get('window').width);

export default class home extends Component {
  render() {
    return (
      <View style={{backgroundColor:'white', flex:1}}>
        <Text h3 style={{margin:5, paddingVertical: 15, paddingHorizontal: 10, }}>
            欢迎使用健康小助手，在这里你可以培养出一个健康的生活习惯！
        </Text>
        <Image
          style={{width: screenWidth-40, height: 300, resizeMode:"cover", borderRadius:30, marginLeft:15, borderWidth:1, borderColor:"#B0C4DE"}}
          source={require('../src/jk.jpg')}
        />
        <View Style={{flexDirection: 'row' }}>
          <Button 
            buttonStyle={{borderRadius:10}}
            containerStyle={{marginTop:10, marginHorizontal:20}}
            titleStyle={{fontSize:40}}
            type="outline"
            title='1.健康档案'
            onPress={() => this.props.navigation.navigate('health')}>
          </Button>
          <Button 
            buttonStyle={{borderRadius:10}}
            containerStyle={{marginTop:10, marginHorizontal:20}}
            titleStyle={{fontSize:40}}
            type="outline"
            title='2.打卡记录'
            onPress={() => this.props.navigation.navigate('message')}>
          </Button>
          <Button 
            buttonStyle={{borderRadius:10}}
            containerStyle={{marginTop:10, marginHorizontal:20}}
            titleStyle={{fontSize:40}}
            type="outline"
            title='3.饮食记录'
            onPress={() => this.props.navigation.navigate('eat')}>
          </Button>
        </View>
      </View>
    );
  }
}
