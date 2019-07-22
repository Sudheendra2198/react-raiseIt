import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { LoginPage, Dashboard, RaiseIssue } from '../screens';

const MainStackNavigator = createStackNavigator(
    {
      LoginPage,
      Dashboard,
      RaiseIssue
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
