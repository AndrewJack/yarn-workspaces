/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { amazingFunction } from 'delivery-core';
import ChatHeads from 'delivery-core/src/chatHeads';
import { RectButton } from 'react-native-gesture-handler';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

type Props = {};
type State = {
  showChatHeads: boolean
};

export default class App extends Component<Props, State> {
  state = {
    showChatHeads: false
  };

  render() {
    return this.state.showChatHeads ? (
      <ChatHeads />
    ) : (
      <View style={styles.container}>
        <Text
          style={styles.welcome}
        >{`Result of shared core module ${amazingFunction()}`}</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <RectButton onPress={() => this.setState({ showChatHeads: true })}>
          <Text>View chat heads</Text>
        </RectButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
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
  }
});
