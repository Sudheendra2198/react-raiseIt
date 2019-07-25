import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import arrow from '../assets/arrow.jpeg'

const upvote = props => {
    return (
        <View style={styles.container}>
            <Image source={arrow} style={styles.image} />
            <Text style={{fontSize: 20, marginLeft: 2}}>{props.upvotes}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 25,
        width: 20
    },
    container: {
        flexDirection :'row',
    }
})

export default upvote;