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
    console.log('接收数据成功')
    console.log(this.state.data)
  }

  fetchData=()=>{
    fetch('http://192.168.1.2:1234/u/foodlist')
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          data: this.state.data.concat(responseData.data),
          loaded: true
        });
      });
  }
//进入详情页面
  loadPage(item){
    fetch('http://192.168.1.2:1234/u/jilu', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: item.name,
      }),
    });
 }

  renderItem=({item})=>{
    return(
      <TouchableOpacity onPress={()=>this.loadPage(item)} style={{marginBottom: 2}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding:10, }}>
          <Image source={{uri: item.img}} style={{width: 120, height: 120, borderRadius:30, borderColor:'#e9e9dd', borderWidth:1}} />
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{color: '#515151', fontSize: 25}}>{item.name}</Text>
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