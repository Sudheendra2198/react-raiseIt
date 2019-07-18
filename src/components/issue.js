import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const issue = () => {
    return (
        <View style={styles.container}>
            <View style={styles.image}></View>
            <View>
                <Text style={{fontSize:30}}>Large Text</Text>
                <Text style={{fontSize:20}}>Small Text</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        height: '20%',
        borderRadius: 5,
        borderWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems:'center'
    },
    image: {
        margin: 2,
        width: '40%',
        height: '80%',
        backgroundColor: 'blue'
    },

})

export default issue;