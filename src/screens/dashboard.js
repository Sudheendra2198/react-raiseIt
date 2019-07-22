import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import Constants from '../constants'
import Issue from '../components/issue'
import add from '../assets/add.jpg'
import openBox from '../assets/openBox.png'



export default class Dashboard extends React.Component {

    state = {
        issues: [],
        isFetching: false
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        fetch("https://react-raiseit.firebaseio.com/issues.json")
        .catch(err => console.log("Find"+err))
        .then(res => res.json())
        .then(parsedRes => {
            const data=[];
            for (let key in parsedRes) {
                data.push({
                    ...parsedRes[key],
                    id: key
                })
                this.setState({issues: data, isFetching: false});
            }
        })
    }

    renderIssues = ({item}) => (
        <Issue 
            key={item.id} 
            imgSrc={item.image}
            desc={item.desc}
            location={item.location} 
            //days={item.days}
            issuePressed={() => this.handleIssuePressed(item.id)}
        />
    )

    handleIssuePressed = id => {
        const item = this.state.issues.find(d => d.id === id);
        alert(item.desc);
    }

    raisePressed = () => {
        const { navigation } = this.props;
        navigation.navigate("RaiseIssue");
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
                        data = {this.state.issues}
                        refreshing={this.state.isFetching}
                        onRefresh= {
                            () => this.setState({
                                isFetching:true},
                                () => this.fetchData())
                        }
                        extraData= {this.state.issues}
                        style={{width:'95%'}}
                        keyExtractor = {this.keyExtractor}
                        renderItem={this.renderIssues}
                    />
                </View>
                <TouchableOpacity
                    style={styles.raiseButton}
                    onPress={this.raisePressed}
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