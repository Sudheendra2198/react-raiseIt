import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import Constants from '../constants'
import ImagePicker from 'react-native-image-picker'

export default class RaiseIssue extends React.Component {

    state = {
        uri: "",
        base64: ""
    }

    chooseImagePressed = () => {
        ImagePicker.showImagePicker({title: "Pick an Image"}, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              //const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                uri: source,
                base64: response.data
              },() => alert(JSON.stringify(this.state.uri)));
            }
          });
          
    }

    uploadPressed = () => {
        fetch("https://us-central1-react-raiseit.cloudfunctions.net/storeImage",{
            method: "POST",
            body: JSON.stringify({
                image: this.state.base64
            })
        })
        .catch(err => {throw err})
        .then(res => res.json())
        .then(parsedRes => {
            alert(JSON.stringify(parsedRes))
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        {Constants.title}
                    </Text>
                </View>
                <View style={styles.display}>
                    <TouchableOpacity onPress={this.chooseImagePressed}
                    style={styles.chooseImageButton}
                    >
                        <Text>Choose Image</Text>
                    </TouchableOpacity>
                    <View >
                        <Button title="Upload" onPress={this.uploadPressed}/>
                    </View>
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
    display: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        color: 'white'
    },
    chooseImageButton: {
        height: 80,
        width: 80,
        backgroundColor: '#BA0212',
        borderRadius: 8
    },
    image: {
        height: 200,

    }
})