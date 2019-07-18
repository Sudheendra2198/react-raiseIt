import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Constants from '../constants';
import LoginBox from '../components/loginBox'
import navigation from 'react-navigation'

class LoginPage extends React.Component {

    loginHandler = () => {
      this.props.navigation.navigate('Dashboard',{});
    }  
  
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                    {Constants.title}
                    </Text>
                </View>
                <View style={styles.loginBox}>
                    <LoginBox onLoginPressed ={this.loginHandler}/>
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
    height: '15%',
    backgroundColor: '#BA0212',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginBox: {
    flex: 1,
    borderWidth: 1,
  },
  title: {
    fontSize: 40,
    color: 'white'
  },
})

export default LoginPage;