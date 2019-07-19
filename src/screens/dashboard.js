import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import Constants from '../constants'
import Issue from '../components/issue'
import add from '../assets/add.jpg'
import data from './data'
import openBox from '../assets/openBox.png'


export default class Dashboard extends React.Component {

    renderIssues = ({item}) => (
        <Issue 
            key={item.id} 
            imgSrc={item.imgSrc}
            desc={item.desc}
            location={item.location} 
            days={item.days}
            issuePressed={() => this.handleIssuePressed(item.id)}
        />
    )

    handleIssuePressed = id => {
        const item = data.find(d => d.id === id);
        alert(item.desc);
    }

    keyExtractor = (item, index) => item.id.toString();

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        {Constants.title}
                    </Text>
                </View>
                <View style={styles.openIssues}>
                    <Image source={openBox} style={styles.openBoxImage}/>
                    <Text style={styles.openIssuesTitle}>Open Issues</Text>
                </View>
                <View style={styles.display}>
                    <FlatList
                        data = {data}
                        style={{flex: 1}}
                        keyExtractor = {this.keyExtractor}
                        renderItem={this.renderIssues}
                    />
                </View>
                <TouchableOpacity
                    style={styles.raiseButton}
                    onPress={()=> alert("Raise Pressed")}
                >
                    <Image source={add} style={styles.addButton} />
                </TouchableOpacity> 
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
        alignItems: 'center',
       
       
    },
    title: {
        fontSize: 40,
        color: 'white'
    },
    raiseButton: {
        position: 'absolute',
        right: 15,
        bottom: 15,
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButton: {
        height: 60,
        width: 60
    },
    openBoxImage: {
        height: 50,
        width: '20%',
        marginTop: 4
    },
    openIssuesTitle: {
        color: '#BA0212',
        fontSize: 25,
    },
    openIssues: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '10%',
        borderBottomWidth: 1
    }
})