import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Constants from '../constants'
import { db } from '../config'

export default class Details extends React.Component {

    state= {
        item: {}
    }

    componentDidMount() {
        const { params } = this.props.navigation.state;
        console.log(params)
        this.setState({item: params.item});
    }

    upvoteHandler = () => {
        const { item } = this.state;
        const { navigation } = this.props;
        const newUpvote = item.upvotes + 1;
        db.ref('issues/' + item.id).update({upvotes: newUpvote})
        .then(()=>{
            alert("Data saved successfully.");
            navigation.navigate('Dashboard');
          }).catch((error)=> {
            console.log("Data could not be saved." + error);
          });
    }

    render() {
        const { item } = this.state;
        let isDone = true;
        const status = "Resolved"
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        {Constants.title}
                    </Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={{uri: item.image}} style={styles.image}/>
                    
                </View>
                <View style={styles.line} />
                <View style={styles.descriptions}>
                    <Text style={styles.descTitle}>Description:</Text>
                        <Text style={styles.text}>{item.desc}</Text>
                    <Text style={styles.descTitle}>Location:</Text>
                        <Text style={styles.text}>{item.location}</Text>
                    <Text style={styles.descTitle}>Upvotes:</Text>
                        <Text style={styles.text}>{item.upvotes}</Text>
                    <Text style={styles.descTitle}>Added on: <Text style={styles.text}>{item.date}</Text>
                    </Text>
                    <Text style={styles.descTitle}>Status: <Text style={[styles.text, isDone ? {color: 'green'} : {color: 'red'}]}>{status}</Text></Text>
                    <View style={styles.line} />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.upvoteButton} 
                    onPress={this.upvoteHandler}>
                        <Text style={{color: 'white', fontSize: 25}}>Upvote</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.upvoteButton, {backgroundColor: 'red'}]}>
                        <Text style={{color: 'white', fontSize: 25}}>Downvote</Text>
                    </TouchableOpacity>
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
    title: {
        fontSize: 40,
        color: 'white'
    },
    image: {
        height: 200,
        width: '95%'
    },
    imageContainer: {
        margin: 10,
        alignItems: 'center',
        height: 200
    },
    descriptions: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        marginLeft: 5,
        color: 'black'
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: 5,
    },
    descTitle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#E74C3C',
        marginTop: 10
    },
    buttonContainer: {
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    upvoteButton: {
        backgroundColor: 'green',
        width: 150,
        borderRadius: 20,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    }
})