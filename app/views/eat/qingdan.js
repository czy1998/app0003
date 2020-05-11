import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import index from '../../navigation';

export default class qingdan extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={[
            {
              id: 950,
              img: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg',
              name: '姚芳',
            },
            {
              id: 417,
              img: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3252521864,872614242&fm=26&gp=0.jpg',
              name: '潘杰',
            },
          ]}
          renderItem={this.renderMovie}
          keyExtractor={(item) => item.id + item.name}
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
  }
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
