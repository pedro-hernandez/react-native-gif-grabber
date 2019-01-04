import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GetGIFs } from './components/GetGIFs';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Reaction GIF Grabber</Text>
        <GetGIFs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
