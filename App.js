import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput
} from 'react-native';
import { Provider, connect } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import configureStore from "./Store";
import HomeScreen from './Home';
import DataComponent from './Detail'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const {store, persister} = configureStore();

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DataComponent,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persister}>
          <AppContainer/>
        </PersistGate>
      </Provider>
    )
  }
}

