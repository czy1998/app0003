import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class pinggu extends Component {
    render() {
        return (
            <View>
                <Text style={{color: '#ae9373',  fontSize: 20, marginBottom:10, marginTop:10}}> 你的BMI值为： </Text>
                <Image style={{width: 415, height: 300}} source={require('../../src/bz.png')}/>
            </View>
        )
    }
}
