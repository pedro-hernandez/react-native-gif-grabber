import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';

export default class Button extends Component {
    constructor() {
        super();
    }

    onPress(choice) {
        // console.log('clicked', choice);
        const indexPosition = Math.floor(Math.random() * choice.length);
        choice = choice[indexPosition];
        console.log(choice);
        this.props.pickedTheme(choice);
    }

    render() {
        let buttonText = this.props.value[0];
        return (
            <View>
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => this.onPress(this.props.value)}>
                    <Text style={styles.text}>{buttonText.toUpperCase()}</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: 300,
        height: 50,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#eeeeee',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
})
