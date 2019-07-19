import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constants from '../constants'
import Issue from '../components/issue'
import badRoads from '../assets/badRoads.jpg'
import water from '../assets/water.jpg'
import light from '../assets/light.jpg'
import garbage from '../assets/garbage.jpeg'
import add from '../assets/add.jpg'



export default class Dashboard extends React.Component {
    render() {
        const data = [
            {
               id: 1,
               imgSrc: badRoads,
               desc: "Road has many potholes",
               location: "Nizampet, Kukatpally"     
            },
            {
                id: 2,
                imgSrc: water,
                desc: "Water polluted critically",
                location: "Musi, Amberpet"      
            },
            {
                id: 3,
                imgSrc: light,
                desc: "Street light not working",
                location: "KPHB, Kukatpally"      
            },
            {
                id: 4,
                imgSrc: garbage,
                desc: "Overflowing garbage",
                location: "Nizampet, Kukatpally"      
            },

        ]
        let disp = data.map(item => {
            return <Issue 
                    key={item.id} 
                    imgSrc={item.imgSrc}
                    desc={item.desc}
                    location={item.location} 
                    />
        })
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        {Constants.title}
                    </Text>
                </View>
                <View style={styles.display}>
                    {disp}
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
        alignItems: 'center'
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
    }
})