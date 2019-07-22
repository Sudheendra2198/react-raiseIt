import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Button,
    Image,
    TextInput
} from 'react-native'
import Constants from '../constants'
import ImagePicker from 'react-native-image-picker'
import takePic from '../assets/takePic.png'

export default class RaiseIssue extends React.Component {

    state = {
        source:takePic,
        base64: "",
        desc: "",
        location: ""
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
              const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                source:source,
                base64: response.data
              });
            }
          });
          
    }

    uploadPressed = () => {

        const { desc, location } = this.state;
        const { navigation } = this.props;

        fetch("https://us-central1-react-raiseit.cloudfunctions.net/storeImage",{
            method: "POST",
            body: JSON.stringify({
                image: this.state.base64
            })
        })
        .catch(err => {throw err})
        .then(res => res.json())
        .then(parsedRes => {
            const issue= {
                image: parsedRes.imageUrl,
                desc: desc,
                location: location
            }
            fetch("https://react-raiseit.firebaseio.com/issues.json",{
                method: "POST",
                body: JSON.stringify(issue)
            })
            .catch(err => console.log(err))
            .then(res => res.json())
            .then(parsedRes => {
                console.log(parsedRes);
                alert("Uploaded Successfully!");
                navigation.navigate("Dashboard");
            });
        })
    }

    render() {
        const { source } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        {Constants.title}
                    </Text>
                </View>
                <View style={styles.display}>
               <TouchableOpacity onPress={this.chooseImagePressed}
                    style={styles.chooseImageSection}
                    >
                        <Image source={source} style={styles.image}/>
                    </TouchableOpacity>
                    <View style={{width:'90%'}}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(desc) => this.setState({desc})}
                            value={this.state.desc}
                            placeholder="Enter a description"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(location) => this.setState({location})}
                            value={this.state.location}
                            placeholder="Enter location"
                        />
                    </View>
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
    chooseImageSection: {
        height: 250,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5
    },
    image: {
        width: '100%',
        height: 250
    },
    input: {
        height: 40,
        width:'90%',
        borderColor: 'gray',
        borderBottomWidth: 1,
        margin: 10,
        fontSize: 20
    }
})