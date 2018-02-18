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

export default class Top extends Component < Props > {
  state = {
    test: "",
  };

  constructor(props) {
    super();
    this.onPressStateChangeButton = this.onPressStateChangeButton.bind(this);
    this.onPressAlertButton = this.onPressAlertButton.bind(this);
  }

  render() {
    const thumbnailWidth = Dimensions.get('window').width / 3;
    return (
      <ScrollView>
        <View style={styles.container}>
          {_.range(1, 30).map((d) => {
            return (
              <Image
                // source={{uri: `https://lorempixel.com/200/200/nature/${d%5+1}/`}}
                source={{uri: `https://placehold.it/200x200/`}}
                style={{width: thumbnailWidth, height: thumbnailWidth}}
                key={d}
              />
            );
          })}
        </View>
      </ScrollView>
    );
  }

  onPressStateChangeButton() {
    debugger;
    console.log("pushpush");
    this.setState({
      test: 'pushed!!'
    });
  }

  onPressAlertButton() {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
});
