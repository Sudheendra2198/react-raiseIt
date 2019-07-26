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

    loginHandler = () => {
      const { userType } = this.state;
      if ( userType === 'User' ){ 
        this.props.navigation.navigate('Dashboard',{
          user: true
        });
      } else {
        this.props.navigation.navigate('Dashboard',{
          user: false
        });
      }
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
                    <LoginBox onLoginPressed ={this.loginHandler} userType={userType}/>
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