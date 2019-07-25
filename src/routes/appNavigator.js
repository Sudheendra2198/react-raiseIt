import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { 
  LoginPage,
  Dashboard,
  RaiseIssue,
  Details
} from '../screens';

const MainStackNavigator = createStackNavigator(
    {
      LoginPage,
      Dashboard,
      RaiseIssue,
      Details
    },
    {
        initialRouteName: 'Dashboard',
        headerMode: 'none'
    }
);

const AppContainer = createAppContainer(MainStackNavigator);

export default class AppNavigator extends React.Component {
  render() {
    return <AppContainer />;
  }
}
