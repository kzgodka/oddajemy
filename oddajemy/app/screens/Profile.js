import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class List extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Profile
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})