import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import request from '../../common/request';
import config from '../../common/config';

let catchedResults = {
  nextPage: 1,
  items: [],
  total: 0,
};

export default class qingdan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoadingTail: false,
      refreshing:false,
    };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
    this.fetchData = this.fetchData.bind(this);
    this.fetchMoreData = this.fetchMoreData.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
  }

  componentDidMount() {
    this.fetchData(1);
  }

  fetchData(page) {
    let that = this;
    this.setState({
      isLoadingTail: true,
    });

    request
      .get(config.api.base + config.api.creations, {
        accessToken: 'abcde',
        page: page,
      })
      .then((data) => {
        if (data.success) {
          let items = catchedResults.items.slice();

          items = items.concat(data.data);
          catchedResults.items = items;
          catchedResults.total = data.total;

          setTimeout(function () {
            that.setState({
              data: that.state.data.concat(catchedResults.items),
            });
          }, 20);
        }
      })
      .catch((error) => {
        this.setState({
          isLoadingTail: false,
        });
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
          refreshing={this.state.refreshing}
          onRefresh={() => {
            this.setState({refreshing: true})
            setTimeout(() => {
              alert('没有可刷新的内容！');
              this.setState({refreshing: false});
            }, 3000);
          }}
        />
      </View>
    );
  }
  renderMovie = ({item}) => {
    return (
      <TouchableOpacity style={{marginBottom: 2}}>
        <View style={styles.yitiao}>
          <Image source={{uri: item.img}} style={styles.tupian} />
          <View style={styles.rightContainer}>
            <Text style={styles.biaoti}>{item.name}</Text>
            <Text style={styles.tianjia}>添加</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
}

const styles = StyleSheet.create({
  tupian: {
    width: 70,
    height: 70,
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
});
/* height: 50,
paddingHorizontal: 15,
paddingVertical: 6,
borderStyle: 'solid',
borderWidth: 1,
borderRadius: 8,
borderColor: '#ae9373',
backgroundColor: '#f5f5f5',
marginBottom: 6,*/
