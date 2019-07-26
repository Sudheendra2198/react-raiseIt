import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const description = ({item}) => {
    let status = 'Pending'
    if( item.isDone ) status = 'Resolved'
    return(
        <View>
            <View style={styles.line} />
            <Text style={styles.descTitle}>Description:</Text>
                <Text style={styles.text} numOfLines={4}>{item.desc}</Text>
            <Text style={styles.descTitle}>Location:</Text>
                <Text style={styles.text}>{item.location}</Text>
            <Text style={styles.descTitle}>Upvotes:</Text>
                <Text style={styles.text}>{item.upvotes}</Text>
            <Text style={styles.descTitle}>Added on: <Text style={styles.text}>{item.date}</Text>
            </Text>
            <Text style={styles.descTitle}>Status:
                <Text style={[styles.text, item.isDone ? {color: 'green'} : {color: 'red'}]}> {status}</Text>
            </Text>
            <View style={styles.line} />
        </View>
    )
}

const styles = StyleSheet.create({
    descTitle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black',
        marginTop: 10
    },
    text: {
        fontSize: 20,
        marginLeft: 5,
        color: '#3F3F3F'
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: 5,
    },
})

export default description;