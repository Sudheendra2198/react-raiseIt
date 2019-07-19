import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const issue = (props) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={props.imgSrc}
            />
            <View style={styles.description}>
                <Text numberOfLines={1} style={{fontSize:20}}>{props.desc}</Text>
                <Text style={{fontSize:15}}>{props.location}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        height: '20%',
        width: '95%',
        borderRadius: 5,
        borderWidth: 0.5,
        flexDirection: 'row',
        alignItems:'center',
        //backgroundColor: 'red',
    },
    image: {
        width: '35%',
        height: '80%',
        marginLeft: 8,
        //backgroundColor: 'green',
        //justifyContent: 'center'
    },
    description: {
        height:'100%',
        justifyContent: 'flex-start',
        marginLeft: 10,
        marginTop: 5,
        flexWrap: 'wrap'
        //backgroundColor: 'blue',
    },

})

export default issue;