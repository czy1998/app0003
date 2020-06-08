import React, {Component} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import {  Button  } from 'react-native-elements';

const screenWidth = Math.round(Dimensions.get('window').width);
export default class pinggu extends Component {
  constructor(props){
    super(props)
    this.state={
      num:'',
      fr_weight:'',
      td_weight:'',
      success:false
    }
  }
  fetchdata=()=>{
    fetch('http://192.168.1.2:1234/u/look')
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          num: responseData.data.num,
          fr_weight: responseData.data.fr_weight,
          td_weight: responseData.data.td_weight,
          success: responseData.success
        });
        if(this.state.success===true){
          alert(`您的签到天数为：${this.state.num}，第一次打卡的体重为：${this.state.fr_weight}，最近一次打卡的体重为:${this.state.td_weight}`)
        }
      }); 
  }
  render() {
    return (
      <View style={{flex:1, backgroundColor:'white'}}>
        <Image
          style={{width: screenWidth, height: 250, resizeMode:'contain', marginBottom: 40}}
          source={require('../../src/sj.png')}
        />
        <View style={{flexDirection: 'row', marginLeft:30}}>
          <Text style={{ fontSize: 30, marginBottom: 30, marginTop: 30}}>
            {' '}
            你的签到天数为：{' '}
          </Text>
          <Text style={{ fontSize: 30, marginBottom: 30, marginTop: 30, borderBottomWidth:2, borderColor:'black'}}>
            {this.state.num}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft:30}}>
          <Text style={{ fontSize: 30, marginBottom: 30}}>
            {' '}
            第一次打卡的体重：{' '}
          </Text>
          <Text style={{ fontSize: 30, marginBottom: 30, borderBottomWidth:2, borderColor:'black'}}>
            {this.state.fr_weight}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft:30}}>
          <Text style={{ fontSize: 30, marginBottom: 30}}>
            {' '}
            上次打卡的体重：{' '}
          </Text>
          <Text style={{ fontSize: 30, marginBottom: 60, borderBottomWidth:2, borderColor:'black'}}>
            {this.state.td_weight}
          </Text>
        </View>
        
        <View style={{
            alignItems: 'center',
          }}>
          <Button 
            titleStyle={{fontSize:40}}
            type="outline"
            title='查看数据'
            onPress={() => this.fetchdata()}>
          </Button>
        </View>
      </View>
    );
  }
}
