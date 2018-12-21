import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GetGIFs } from './components/GetGIFs';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Holiday GIF Grabber</Text>
        <GetGIFs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
