import React from 'react';
import { 
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    TouchableHighlight 
} from 'react-native';
import Constants from '../constants';

class loginBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '' 
        };
      }

      loginPressed = () => {
          this.props.onLoginPressed();
      }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.loginTitle}>
                    {Constants.loginTitle}
                </Text>
                <TextInput
                    style= {styles.inputField}
                    placeholder={"Enter Username"}
                    onChangeText={(username) => this.setState({username})}
                    value= {this.state.username}
                />
                <TextInput
                    style= {styles.inputField}
                    secureTextEntry={true}
                    password={true}
                    placeholder={"Enter Password"}
                    onChangeText={(password) => this.setState({password})}
                    value= {this.state.password}
                />
                <TouchableHighlight
                    style={styles.submitButton}
                >
                    <Button
                        onPress = {this.loginPressed}
                        title="Sign In"
                        color="#BA0212"
                    />
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 40,
    },
    loginTitle: {
        textAlign: 'center',
        fontSize: 35,
        color: '#BA0212',
    },
    inputField: {
        marginTop: 15,
        fontSize: 20,
        width: '70%',
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    submitButton: {
        marginTop: 20,
        backgroundColor: '#BA0212',
        height: 40,
        width: 100,
        borderRadius: 5,
    },
})

export default loginBox