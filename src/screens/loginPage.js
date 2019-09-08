import React from 'react';
import { View, Text, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import Constants from '../constants';
import LoginBox from '../components/loginBox'
import navigation from 'react-navigation'


class LoginPage extends React.Component {

    state = {
      userType: 'User',
      userSelected: true,
      adminSelected: false
    }

    loginHandler = (username, password) => {
      const { userType } = this.state;
      if ( userType === 'User' ){ 
          console.log(username)
          console.log(password)
            fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB9TfJJZh3PHkbXuaW5wVm7IcByclxeLz8", {
                method: "POST",
                body : JSON.stringify({
                    email: username,
                    password: password,
                    returnSecureToken: true
                })
            })
            .catch(err => console.log(err))
            .then(res => res.json())
            .then(parsedRes => {
                if (parsedRes.error) {
                  alert("Error:"+parsedRes.error.message)
                } else if( parsedRes.registered ){
                  this.props.navigation.navigate('Dashboard',{
                    user: true
                  });
                } else {
                  alert("Wrong username or password")
                }
            })
      } else {
        if( username === "Admin123" && password === "pwdadmin") {
          this.props.navigation.navigate('Dashboard',{
            user: false
          });
        } else {
          alert("Invalid username or password");
        }
      }
    }  

    signUphandler = () => {
      const { navigation } = this.props;
      navigation.navigate('SignUpPage');
    }

    tabPressed = flag => {
      if ( flag === 1){
        this.setState({
          userSelected: true,
          adminSelected: false,
          userType: 'User'
        }) } else {
          this.setState({
            userSelected: false,
            adminSelected: true,
            userType: 'Admin'
          }) 
        }
    }
  
    render() {
      const { userSelected, adminSelected, userType } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                    {Constants.title}
                    </Text>
                </View>
                <View style={styles.tab}>
                  <TouchableOpacity style={[styles.tabButton, userSelected ? {backgroundColor: 'white'} : null]}
                  onPress={() => this.tabPressed(1)}>
                    <Text style={[styles.tabText, userSelected ? {color: 'black'} : null]}>
                      User
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.tabButton, adminSelected ? {backgroundColor: 'white'} : null]}
                  onPress={() => this.tabPressed(0)}>
                    <Text style={[styles.tabText, adminSelected ? {color: 'black'} : null]}>Admin</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.loginBox}>
                    <LoginBox 
                      onLoginPressed ={this.loginHandler}
                      onSignUpPressed={this.signUphandler} 
                      userType={userType}/>
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
  loginBox: {
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

export default LoginPage;