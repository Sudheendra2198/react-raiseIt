import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { 
  LoginPage,
  Dashboard,
  RaiseIssue,
  Details,
  SignUpPage
} from '../screens';

const MainStackNavigator = createStackNavigator(
    {
      LoginPage,
      SignUpPage,
      Dashboard,
      RaiseIssue,
      Details
    },
    {
        initialRouteName: 'LoginPage',
        headerMode: 'none'
    }
);

const AppContainer = createAppContainer(MainStackNavigator);

export default class AppNavigator extends React.Component {
  render() {
    return <AppContainer />;
  }
}
