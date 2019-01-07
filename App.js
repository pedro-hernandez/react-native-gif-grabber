import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { GetGIFs } from './components/GetGIFs';

export default class App extends React.Component {
  render() {
    return (
      <LinearGradient 
        colors={['#ef017c', '#8A4ED3']} 
        start={[0, 0]}
        style={styles.gradient}>
        <View style={styles.container}>
        <Text style={styles.title}>Reaction GIF Generator</Text>
        <GetGIFs />
        <Text style={styles.credits}>GIFs courtesy of Giphy.com</Text>
        </View>
        </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    color: '#eeeeee',
    marginBottom: 20,
  },
  credits: {
    fontSize: 12,
    color: '#eeeeee',
  }
});
