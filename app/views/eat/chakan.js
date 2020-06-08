import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';


export default class fangan extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[],
      loaded: false
    };
  }
  
  componentDidMount() {
    this.fetchData();
  }

  fetchData=()=>{
    fetch('http://192.168.1.2:1234/u/see')
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          data: this.state.data.concat(responseData.data),
          loaded: true
        });
      });
  }

  renderItem=({item})=>{
    return(
      <TouchableOpacity  style={{marginBottom: 2}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white'}}>
          <View style={{}}>
    <Text style={{color: '#515151', fontSize: 20, marginLeft:20, marginVertical:10}}>名称：{''}{item.name}</Text>
    <Text style={{color: '#515151', fontSize: 20, marginLeft:20, marginBottom:5}}>添加时间：{''}{item.creatAt}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>Loading foods...</Text>
      </View>
    );
  }

  render() {
    if (!this.state.loaded) {
      console.log('1')
      return this.renderLoadingView();
    }
    return (
      console.log(this.state.data),
      <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `${item} - ${index}`}
        />
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
})