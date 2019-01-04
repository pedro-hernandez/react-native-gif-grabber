import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Button } from '../Button';

export default class GetGIFs extends Component {
    constructor() {
        super();
        this.state = {
            gifURL: './img/conyztyxb0bqbspqgsmg.gif',
            yes: 'yes',
            no: 'no',
            maybe: 'maybe',
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
                <Image
                    style={{ width: 300, height: 200, marginBottom: 5 }}
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

            </View>
        );
    }
}
