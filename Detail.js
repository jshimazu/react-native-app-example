import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Alert,
  ScrollView,
  Dimensions,
} from 'react-native';
import _ from 'lodash';

type Props = {
  payload: {}
};

export default class Detail extends Component < Props > {
  constructor(props) {
    super();
  }

  render() {
    const deviceWidth = Dimensions.get('window').width;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              source={{uri: `https://lorempixel.com/200/200/nature/1/`}}
              style={{flex: 1}}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  header: {
    flex: 1,
  },
});
