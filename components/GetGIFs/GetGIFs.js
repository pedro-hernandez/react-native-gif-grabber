import React, { Component } from 'react';
import { View, Image } from 'react-native';

 export default class GetGIFs extends Component {

    render() {
        return (
            <View>
                <Image
                    style={{ width: 300 }}
                    source={ require('./img/conyztyxb0bqbspqgsmg.gif') }
                />
            </View>
        );
    }
}
