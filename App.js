import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Constants from './constants/constants';
import LoginBox from './components/loginBox'

const app = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {Constants.title}
        </Text>
      </View>
      <View style={styles.loginBox}>
        <LoginBox />
      </View>
    </View>
  )
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

export default app;