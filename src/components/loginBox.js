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
import { TouchableOpacity } from 'react-native-gesture-handler';

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
        const { username, password } = this.state;
        let disabled = false
        if(username.length==0 || password.length==0)
            disabled = true
        return (
            <View style={styles.container}>
                <Text style={styles.loginTitle}>
                    {this.props.userType} {Constants.loginTitle}
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
                <TouchableOpacity
                    style={[styles.submitButton, disabled ? {backgroundColor: 'grey'} : null]}
                    onPress={this.loginPressed}
                    disabled={disabled}
                >
                    <Text style={styles.submitText}>Sign In</Text>
                </TouchableOpacity>
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
        marginTop: 30,
        backgroundColor: '#BA0212',
        height: 45,
        width: 110,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitText: {
        color: 'white',
        fontSize: 20
    }
})

export default loginBox