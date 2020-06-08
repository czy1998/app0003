import React, {Component} from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import {  Button  } from 'react-native-elements';

const screenWidth = Math.round(Dimensions.get('window').width);
export default class health extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor:'white'}}>
        <Image
          style={{width: screenWidth, height: 250, resizeMode:'contain', marginBottom: 80, marginTop:20}}
          source={require('../src/eat.png')}
        />
        <View
          style={{
            alignItems: 'center',
          }}>
            <Button 
            titleStyle={{fontSize:40}}
            type="outline"
            title='饮食方案'
            onPress={() => this.props.navigation.navigate('fangan')}>
          </Button>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Button 
            titleStyle={{fontSize:40}}
            type="outline"
            title='记录饮食'
            onPress={() => this.props.navigation.navigate('jilu')}>
          </Button>
        </View>
      </View>
    );
  }
}
