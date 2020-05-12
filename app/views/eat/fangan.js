import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  RefreshControl,
} from 'react-native';
import request from '../../common/request';
import config from '../../common/config';

let catchedResults = {
  nextPage: 1,
  items: [],
  total: 0,
};


class List extends Component {
  constructor(props){
    super(props)
    this.state={item:this.props.item}
  }
  render() {
    let item=this.state.item
    return (
      <TouchableOpacity style={{marginBottom: 2}}>
        <View style={styles.yitiao}>
          <Image source={{uri: item.img}} style={styles.tupian} />
          <View style={styles.rightContainer}>
            <Text style={styles.biaoti}>{item.name}</Text>
          </View>
        </View>
        {/* <View style={[styles.rightContainer]}>
          <View style={styles.xihuan}>
            <Image style={styles.icon} source={require('../../src/like.png')} />
            <Text style={{fontSize:17}}>喜欢</Text>
          </View>
          <View style={styles.xihuan}>
            <Image style={styles.icon} source={require('../../src/talk.png')} />
            <Text style={{fontSize:17}}>评论</Text>
          </View>
        </View>      喜欢与评论     */}
      </TouchableOpacity>
    )
  }
}


export default class qingdan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoadingTail: false,
      isRefreshing:false,
    };
    
    this.fetchData = this.fetchData.bind(this);
    this.fetchMoreData = this.fetchMoreData.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
    
  }

  componentDidMount() {
    this.fetchData(1);
  }

  fetchData(page) {
    let that = this;

    if(page!==0){
      this.setState({
        isLoadingTail: true,
      });
    }
    else{
      this.setState({
        isRefreshing:true,
      });
    }
    

    request
      .get(config.api.base + config.api.creations, {
        accessToken: 'abcde',
        page: page,
      })
      .then((data) => {
        if (data.success) {
          let items = catchedResults.items.slice();

          if(page!==0){
            items = items.concat(data.data);
            catchedResults.nextPage += 1;
          }
          else{
            items =data.data.concat(items);
          }
          
          catchedResults.items = items;
          catchedResults.total = data.total;

          setTimeout(function () {
            if(page!==0){
              that.setState({
                isLoadingTail:false,
                data: that.state.data.concat(catchedResults.items),
              });
            }
            else{
              that.setState({
                isRefreshing:false,
                data: that.state.data.concat(catchedResults.items),
              });
            }
          }, 20);
        }
      })
      .catch((error) => {
        if(page!==0){
          this.setState({
            isLoadingTail: false,
          });
        }
        else{
          this.setState({
            isRefreshing: false,
          });
        }
      });
  }
  hasMore() {
    return catchedResults.items.length !== catchedResults.total;
  }

  fetchMoreData() {
    if (!this.hasMore() || this.state.isLoadingTail) {
      return;
    }
    let page = catchedResults.nextPage;
    this.fetchData(page);
  }
  _onRefresh(){
    if(!this.hasMore() || this.state.isRefreshing){
      return
    }

    this.fetchData(0);
  }

  renderFooter = () => (
    <View style={styles.loading}>
      <Text style={styles.loadingtext}>没有东西了…</Text>
    </View>
  );

  render() {
    return (
      <View>
        <FlatList
          onEndReached={this.fetchMoreData}
          ListFooterComponent={this.renderFooter}
          onEndReachedThreshold={20}
          data={this.state.data}
          renderItem={this.renderMovie}
          keyExtractor={(item) => item.id + item.name}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._onRefresh}
              tintColor='#ff6600'
              title='拼命加载中...'
            />
          }
        />
      </View>
    );
  }
  renderMovie = ({item}) => {
    return <List item={item} />
  };
}

const styles = StyleSheet.create({
  tupian: {
    width: 120,
    height: 120,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  biaoti: {
    color: '#ae9373',
    fontSize: 20,
  },
  tianjia: {
    color: '#ae9373',
    fontSize: 20,
    marginRight: 10,
  },
  yitiao: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  loadingtext: {
    color: '#777',
    textAlign: 'center',
  },
  loading: {
    marginVertical: 20,
  },
  icon:{
    height:25,
    width:25,
  },
  xihuan:{
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    width:238,
    backgroundColor:'#F5FCFa'
  }
});
