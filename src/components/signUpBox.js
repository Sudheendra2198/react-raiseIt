import React from 'react';
import { 
    View,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native';
import Constants from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

class loginBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: '' 
        };
      }

      signUpPressed = () => {
          const { email, password } = this.state;
        this.props.onSignUpPressed(email,password);
      }

    render() {
        const { email, password } = this.state;
        let disabled = false
        if(email.length==0 || password.length==0)
            disabled = true
        return (
            <View style={styles.container}>
                <Text style={styles.loginTitle}>
                    Sign Up
                </Text>
                <TextInput
                    style= {styles.inputField}
                    placeholder={"Enter Username"}
                    onChangeText={(email) => this.setState({email})}
                    value= {this.state.email}
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
                    onPress={this.signUpPressed}
                    disabled={disabled}
                >
                    <Text style={styles.submitText}>Sign Up</Text>
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