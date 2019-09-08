import React from 'react';
import { View, Text, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import Constants from '../constants';
import SignUpBox from '../components/signUpBox'


export default class SignUpPage extends React.Component {


    signUphandler = (email, password) => {
      console.log(email)
      console.log(password)
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB9TfJJZh3PHkbXuaW5wVm7IcByclxeLz8", {
            method: "POST",
            body : JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            })
        })
        .catch(err => console.log(err))
        .then(res => res.json())
        .then(parsedRes => {
            if (parsedRes.error) {
              alert("Error:"+parsedRes.error.message)
            } else {
              this.props.navigation.navigate('Dashboard',{
                user: true
              });
            }
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
                <View style={styles.signUpBox}>
                    <SignUpBox 
                      onSignUpPressed={(email, id) => this.signUphandler(email,id)} />
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
  signUpBox: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    color: 'white'
  },
  tab: {
    height: '8%',
    backgroundColor: '#BA0212',
    flexDirection: 'row',
    width: '100%'
  },
  tabButton: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#840000',
  },
  tabText: {
    fontSize: 25,
    color: '#E2E7E2'
  }
})
