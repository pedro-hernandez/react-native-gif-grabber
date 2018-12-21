import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class GetGIFs extends Component {
    constructor() {
        super();
        this.state = {
            gifURL: './img/conyztyxb0bqbspqgsmg.gif',
        }
    }

    componentDidMount = async () => {
        const giphyAPI = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=2mXx0bqPcKrGh9aUaRWBC0q6wpa734gR&tag=christmas`);
        const giphyData = await giphyAPI.json();

        this.setState({
            gifURL: giphyData.data.images.original.url,
        })

        console.log(this.state.gifURL);
    }

    render() {
        return (
            <View>
                <Image
                    style={{ width: 300, height: 200 }}
                    // source={ require('./img/conyztyxb0bqbspqgsmg.gif')}
                    source={{ uri: `${this.state.gifURL}` }}
                />
            </View>
        );
    }
}
