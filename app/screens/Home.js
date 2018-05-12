import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Home extends Componen {
  render() {
    return (
      <View style={styles.container}>
        <Text>
            Home
            1. 头部搜索->二维码扫描 [搜索中会出现搜索热词]
            2. Baner
            3. 首页文章列表
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
