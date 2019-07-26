import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Constants from '../constants'
import Description from '../components/description'
import VoteButtons from '../components/voteButtons'
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

    voteHandler = (flag) => {
        const { item } = this.state;
        const { navigation } = this.props;
        const newUpvote = flag===1 ? item.upvotes + 1 : item.upvotes - 1;
        db.ref('issues/' + item.id).update({upvotes: newUpvote})
        .then(()=>{
            alert("Voted successfully.");
            navigation.navigate('Dashboard');
          }).catch((error)=> {
            console.log("Data could not be saved." + error);
          });
    } 

    resolveIssueHandler = () => {
        const { item } = this.state;
        const { navigation } = this.props;
        db.ref('issues/' + item.id).update({isDone: true})
        .then(()=>{
            alert("Resolved successfully.");
            navigation.navigate('Dashboard', {
                user: false
            });
          }).catch((error)=> {
            console.log("Data could not be saved." + error);
          });
    }

    render() {
        const { item } = this.state;
        const { user } = this.props.navigation.state.params;
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
                
                <View style={styles.descriptions}>
                    <Description item={item} />
                </View>
                <View style={styles.buttonContainer}>
                    {user ? <VoteButtons upvotePressed={() => this.voteHandler(1)}
                     downvotePressed={() => this.voteHandler(0)} /> :
                     <TouchableOpacity style={styles.resolvedButton} 
                        onPress={this.resolveIssueHandler}>
                         <Text style={styles.resolveText}>Resolve Issue</Text>
                     </TouchableOpacity> }
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
    buttonContainer: {
        height: '10%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    resolvedButton: {
        width: '70%',
        height: 45,
        backgroundColor: '#00680D',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    resolveText: {
        color: '#E2E7E2',
        fontSize: 25
    }
})