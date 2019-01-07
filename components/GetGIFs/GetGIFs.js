import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button } from '../Button';
import { FadeInImage } from '../FadeInImage';


export default class GetGIFs extends Component {
    constructor() {
        super();
        this.state = {
            gifURL: './img/conyztyxb0bqbspqgsmg.gif',
            yes: ['yes', 'affirmative', 'definitely', 'ok'],
            no: ['no', 'negative', 'nope', 'never', 'ixnay', 'nah', 'nay'],
            maybe: ['maybe', 'perhaps', 'undecided'],
            testArr: ['octopus', 'kitten', 'puppy'],
        }
    }

    componentDidMount = async () => {
        const giphyAPI = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=2mXx0bqPcKrGh9aUaRWBC0q6wpa734gR`);
        const giphyData = await giphyAPI.json();

        this.setState({
            gifURL: giphyData.data.images.original.url,
        })

        console.log(this.state.gifURL);
    }

    pickedTheme = async (choice) => {
        const giphyAPI = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=2mXx0bqPcKrGh9aUaRWBC0q6wpa734gR&tag=${choice}`);
        const giphyData = await giphyAPI.json();

        this.setState(prevState => ({
            gifURL: giphyData.data.images.original.url,
        }));

        console.log(this.state.gifURL);
    }

    render() {
        return (
            <View>
                <FadeInImage
                    style={styles.gif}
                    source={{ uri: `${this.state.gifURL}` }}
                />
                <Button
                    value={this.state.yes}
                    pickedTheme={this.pickedTheme}
                />
                <Button
                    value={this.state.no}
                    pickedTheme={this.pickedTheme}
                />
                <Button
                    value={this.state.maybe}
                    pickedTheme={this.pickedTheme}
                />
                {/* <Button
                    value={this.state.testArr}
                    pickedTheme={this.pickedTheme}
                /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    gif: {
        width: 300, 
        height: 200, 
        marginBottom: 20,
        borderRadius: 10,
    },
})
