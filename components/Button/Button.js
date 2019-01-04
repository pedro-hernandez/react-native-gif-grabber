import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';

export default class Button extends Component {
    constructor() {
        super();
    }

onPress(choice) {
    console.log('clicked', choice);
    this.props.pickedTheme(choice);
}    

render() {
    return (
        <View>
            <TouchableHighlight
                style={styles.button}
                onPress={() => this.onPress(this.props.value)}>
                <Text style={styles.text}>{this.props.value}</Text>
            </TouchableHighlight>
        </View>
    )
}

}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#05f',
        width: 300,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#00000',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
})
