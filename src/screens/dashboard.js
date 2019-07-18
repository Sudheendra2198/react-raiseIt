import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from '../constants'
import Issue from '../components/issue'

export default class Dashboard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        {Constants.title}
                    </Text>
                </View>
                <View style={styles.display}>
                    <Issue />
                    <Issue />
                    <Issue />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: '10%',
        backgroundColor: '#BA0212',
        alignItems: 'center',
        justifyContent: 'center'
    },
    display: {
        flex: 1,
    },
    title: {
        fontSize: 40,
        color: 'white'
    },
})