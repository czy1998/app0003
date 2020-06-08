import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';

export default class xinxi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mubiao: '',
    };
  }
  render() {
    return (
      <View>
        <View style={styles.view1}>
          <Text style={[styles.text, styles.topStatus]}>目标：</Text>
          <View style={styles.flex}>
            <View style={[styles.flexDirection, styles.inputHeight, styles.topStatus]}>
              <View style={styles.flex}>
                <Input
                  style={styles.input}
                  placeholder="请输入你的目标"
                  onChangeText={(text) => this.setState({mubiao: text})}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Button
            Style={{margin: 10, padding: 20}}
            titleStyle={{fontSize: 40}}
            type="outline"
            title="保存目标"
            onPress={() => {}}></Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 80,
  },
  button: {
    width: 150,
    height: 50,
    marginTop: 40,
    marginLeft: 20,
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ae9373',
    backgroundColor: '#f5f5f5',
  },
  text: {
    marginLeft: 5,
    fontSize: 25,
    lineHeight: 40,
    textAlign: 'center',
  },
  flex: {
    flex: 1,
  },
  flexDirection: {
    flexDirection: 'row',
  },
  topStatus: {
    marginTop: 25,
  },
  inputHeight: {
    height: 45,
  },
  input: {
    height: 45,
    borderWidth: 1,
    marginLeft: 5,
    paddingLeft: 5,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});
