import React, {Component} from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import {  Button  } from 'react-native-elements';

const screenWidth = Math.round(Dimensions.get('window').width);
export default class pinggu extends Component {
  constructor(props){
    super(props)
    this.state={
          height: Number,
          weight: Number,
          success:false
    }
  }
  fetchdata=()=>{
    fetch('http://192.168.1.2:1234/u/pinggu')
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          height: responseData.data.height,
          weight: responseData.data.weight,
          success: responseData.success
        });
        if(this.state.success===true){
          let a=this.state.weight/((this.state.height/100)*(this.state.height/100))
          alert(`您的BMI值为：${a}`)
        }
      });    
  }
  advice=()=>{
    let b=this.state.weight/((this.state.height/100)*(this.state.height/100))
    if(b<18.5){
      alert('您BMI值属于异常范围，比一般水平要低，您需要多去参加体育锻炼，以及多吃富含蛋白质的食物')
    }else if(18.5<b&&b<24){
      alert('您BMI值属于正常范围，您需要继续保持现在的状态。当然多参加体育运动，多吃些绿色健康食品，您的身体会变的更棒')
    }else if(b>24){
      alert('您BMI值属于异常范围，比一般水平要高，您需要控制自己的饮食，少吃油腻的食物，多去参加体育锻炼')
    }
  }
  render() {
    return (
      <View style={{flex:1, backgroundColor:'white'}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{ fontSize: 20, marginBottom: 30, marginTop: 30}}>
            {' '}
            你的BMI值为：{' '}
          </Text>
          <Text style={{ fontSize: 20, marginBottom: 30, marginTop: 30}}>
            {this.state.weight/((this.state.height/100)*(this.state.height/100))}
          </Text>
        </View>
        <Image
          style={{width: screenWidth, resizeMode: 'contain', height: 300, marginBottom: 50}}
          source={require('../../src/bz.png')}
        />
        <View style={{
            alignItems: 'center',
          }}>
          <Button 
            titleStyle={{fontSize:40}}
            type="outline"
            title='计算结果'
            onPress={() => this.fetchdata()}>
          </Button>
          <Text></Text>
          <Text></Text>
          <Button 
            titleStyle={{fontSize:40}}
            type="outline"
            title='推荐方案'
            onPress={() => this.advice()}>
          </Button>
        </View>
      </View>
    );
  }
}
