import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const voteButtons = props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.upvoteButton} 
            onPress={props.upvotePressed}>
                <Text style={{color: '#E2E7E2', fontSize: 25}}>Upvote</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.upvoteButton, {backgroundColor: '#BD1616'}]}
            onPress={props.downvotePressed}>
                <Text style={{color: '#E2E7E2', fontSize: 25}}>Downvote</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection:'row',
        justifyContent: 'space-evenly'
    },
    upvoteButton: {
        backgroundColor: '#00680D',
        width: 150,
        borderRadius: 20,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default voteButtons;