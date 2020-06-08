import React, {Component} from 'react';
import {Text, View,  StyleSheet, Image} from 'react-native';


export default class jilu extends Component {

  render() {
    const { name } = this.props.route.params;
    const { nutrition } = this.props.route.params;
    const { cook_method } = this.props.route.params;
    const { cook_list } = this.props.route.params;
    const { img } = this.props.route.params;
    return (
      <View style={{flex:1, backgroundColor:'white'}}>
        <View style={styles.flex}>
          <Image source={{uri:img}} style={styles.img}/>
          <Text style={[styles.nametext]}>名称：{JSON.stringify(name)}</Text>
        </View>
        <View style={{marginTop:20, paddingHorizontal:30}}>
            <View style={{flexDirection: 'row', marginBottom:30}}>
              <Text style={{fontSize:25, marginRight: 10}}>食材原料：</Text>
              <Text style={{fontSize:20, width:260, color:'#515151'}}>{JSON.stringify(cook_list)}</Text>
            </View>
            <View style={{flexDirection: 'row', marginBottom:30}}>
              <Text style={{fontSize:25, marginRight: 10}}>制作方法：</Text>
              <Text style={{fontSize:20, width:260, color:'#515151'}}>{JSON.stringify(cook_method)}</Text>
            </View>
            <View style={{flexDirection: 'row', marginBottom:30}}>
              <Text style={{fontSize:25, marginRight: 10}}>营养价值：</Text>
              <Text style={{fontSize:20, width:260, color:'#515151'}}>{JSON.stringify(nutrition)}</Text>
            </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    flex:{
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft:20,
      marginTop:20
    },
    nametext: {
      color: '#515151',
      fontSize: 25,
      textAlign: 'center',
      marginLeft:30
    },
    img: {
        width: 120,
        height: 120,
        borderRadius:30
    },
  });
  