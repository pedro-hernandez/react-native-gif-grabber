import React, { Component } from 'react';
import { Animated, Image } from 'react-native';

export default class FadeInImage extends Component {
    state = {
        fadeAnim: new Animated.Value(0),
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 2000,
            }
        ).start();
    }

    componentDidUpdate(prevProps) {
        if (this.props.source !== prevProps.source) {
            this.state.fadeAnim.setValue(0);
            Animated.timing(
                this.state.fadeAnim,
                {
                    toValue: 1,
                    duration: 1000,
                }
            ).start();
        }
    }

    render() {
        let { fadeAnim } = this.state;
        return (
            <Animated.Image
                source={{
                    ...this.props.source,
                }}
                style={{
                    ...this.props.style,
                    opacity: fadeAnim,
                }}
            >
                {this.props.children}
            </Animated.Image>
        );
    }
}

