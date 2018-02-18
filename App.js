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
  TouchableOpacity,
} from 'react-native';

import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';
import Top from './Top';
import Detail from './Detail';
import Setting from './Setting';

import RNDrawer from 'react-native-drawer';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev men' +
      'u'
});

type Props = {};

export default class App extends Component < Props > {
  constructor(props) {
    super();
    this.closeControlPanel = this.closeControlPanel.bind(this);
    this.openControlPanel = this.openControlPanel.bind(this);
    this.onPressMenuButton = this.onPressMenuButton.bind(this);
  }

  closeControlPanel() {
    this._drawer.close();
  };
  openControlPanel() {
    this._drawer.open();
  };

  render() {

    const Header = () => {
      return (
        <View style={styles.header}>
          <View style={styles.headerItem}>
            <Text onClick={() => {Actions.setting()}}>menu1</Text>
          </View>
          <Text style={styles.headerItem}>menu2</Text>
          <Text style={styles.headerItem}>menu3</Text>
          <View style={styles.headerMenuButton}>
            <TouchableOpacity onPress={this.onPressMenuButton}>
              <Text style={styles.headerMenuText}>■</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };

    const Menu = () => {
      return (
        <View style={styles.menu}>
          <Text>test</Text>
          <Text>test</Text>
          <Text>test</Text>
          <Text>test</Text>
          <Text>test</Text>
        </View>
      );
    };

    return (
      <RNDrawer
        type="overlay"
        ref={(ref) => this._drawer = ref}
        content={<Menu />}
        tapToClose={true}
        openDrawerOffset={0.5} // 20% gap on the right side of drawer
        panCloseMask={0.5}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
      >
        <Header />
        <Router>
          <Stack key="root">
            <Scene key="top" component={Top} title="Top" hideNavBar={true} />
            <Scene key="detail" component={Detail} title="detail" />
            <Scene key="setting" component={Setting} title="setting" />
          </Stack>
        </Router>
      </RNDrawer>
    );
  }

  onPressMenuButton() {
    this.openControlPanel();
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.4, shadowRadius: 3, backgroundColor: '#000', paddingTop: 20 },
  main: {paddingLeft: 3 },
};

const styles = StyleSheet.create({
  header: {
    // flex: 0.1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    height: 50,
  },
  headerItem: {
    height: 5,
  },
  headerMenuButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 50,
    height: 50,
  },
  headerMenuText: {
    fontSize: 40,
  },
  menu: {
    flex: 1,
    flexDirection: 'column',
  },
});
