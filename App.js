import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GetGIFs } from './components/GetGIFs';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Reaction GIF Generator</Text>
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
  title: {
    fontSize: 30,
    marginBottom: 10,
  }
});
