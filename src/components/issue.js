import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const issue = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.issuePressed}>
            <Image 
                style={styles.image}
                source={props.imgSrc}
            />
            <View style={styles.description}>
                <Text numberOfLines={1} style={{fontSize:20}}>{props.desc}</Text>
                <Text style={{fontSize:15}}>{props.location}</Text>
                <Text style={{position:'absolute', bottom:10}}>Added {props.days} days ago</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        height: 100,
        borderRadius: 5,
        borderWidth: 0.5,
        flexDirection: 'row',
        alignItems:'center',
    },
    image: {
        width: '35%',
        height: '80%',
        marginLeft: 8,
    },
    description: {
        height:'100%',
        justifyContent: 'flex-start',
        marginLeft: 10,
        marginTop: 5,
        flexWrap: 'wrap'
    },

})

export default issue;