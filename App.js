/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Alert,
} from 'react-native';

import Drawer from 'react-native-drawer';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev men' +
      'u'
});

type Props = {};

export default class App extends Component < Props > {
  constructor(props) {
    super();
    this.onPressStateChangeButton = this.onPressStateChangeButton.bind(this);
    this.onPressAlertButton = this.onPressAlertButton.bind(this);
    this.closeControlPanel = this.closeControlPanel.bind(this);
    this.openControlPanel = this.openControlPanel.bind(this);
  }

  state = {
    test: "",
  };

  closeControlPanel() {
    this._drawer.close();
  };
  openControlPanel() {
    this._drawer.open();
  };

  render() {

    const ControlPanel = () => {
      return (
        <View style={styles.controlPanel}>
          <Text style={styles.controlPanelItem}>hogehogehoge</Text>
        </View>
      );
    };

    return (
      <Drawer
        type="overlay"
        ref={(ref) => this._drawer = ref}
        content={<ControlPanel />}
        tapToClose={true}
        openDrawerOffset={0.5} // 20% gap on the right side of drawer
        panCloseMask={0.5}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
      >
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js
          </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
          <Button
            onPress={this.onPressStateChangeButton}
            title="State Change"
            color="#841584" />
          <View style={styles.button}>
            <Button
              onPress={this.onPressAlertButton}
              title="Alert"
              color="#841584" />
          </View>
          <Button
              onPress={this.openControlPanel}
              title="OpenMenu"
              color="red" />
          <Text>
            {this.state.test}
          </Text>
          <Image
            source={{uri: 'https://placehold.it/200x200'}}
            style={{width: 200, height: 200}} />
        </View>
      </Drawer>
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

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.4, shadowRadius: 3, backgroundColor: '#000', paddingTop: 20 },
  main: {paddingLeft: 3 },
};

const styles = StyleSheet.create({
  controlPanel: {
  },
  controlPanelItem: {
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  button: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'red',
    backgroundColor: 'blue',
  },
});
