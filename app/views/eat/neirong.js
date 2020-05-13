import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';


export default class jilu extends Component {

  render() {
    const { YL } = this.props.route.params;
    const { ZF } = this.props.route.params;
    const { IMG } = this.props.route.params;
    const { NAME } = this.props.route.params;
    return (
      <View >
        <View style={styles.flex}>
          <Image source={{uri:IMG}} style={styles.img}/>
          <Text style={[styles.nametext]}>名称：{JSON.stringify(NAME)}</Text>
        </View>
        <View>
            <Text style={styles.jutitext}>食材原料：{JSON.stringify(YL)}</Text>
            <Text style={styles.jutitext}></Text>
            <Text style={styles.jutitext}>做法：{JSON.stringify(ZF)}</Text>

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    flex:{
      flexDirection: 'row',
      alignItems: 'center',
    },
    nametext: {
      color: '#ae9373',
      fontSize: 20,
      textAlign: 'center',
    },
    img: {
        width: 120,
        height: 120,
    },
    jutitext:{
        fontSize:20,
        marginLeft:10,
        marginTop:10,
    }
  });
  