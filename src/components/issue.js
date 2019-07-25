import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Upvote from '../components/upvote'


const issue = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.issuePressed}>
            <Image 
                style={styles.image}
                source={{uri: props.imgSrc}}
            />
            <View style={styles.description}>
                <Text numberOfLines={1} style={{fontSize:20}}>{props.desc}</Text>
                <Text style={{fontSize:15}}>{props.location}</Text>
                <View style={{width: '100%',flexDirection: 'row',justifyContent: 'space-between'}}>
                    <Text>Added on {props.date}</Text>
                </View>
            </View>
            <View style={{position: 'absolute',right: 25,bottom: 10}}>
                    <Upvote upvotes={props.upvotes} />
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
        justifyContent: 'space-evenly',
        marginLeft: 10,
        flexWrap: 'wrap'
    },

})

export default issue;