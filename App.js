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

updateText = (text) => {
  return {
    type: 'UPDATE',
    payload: text
  }
}

const {store, persister} = configureStore();

class DataComponent extends React.PureComponent {
  onUpdateText = text => {
    this.props.dispatch(updateText(text))
  }
  render() {
    return (
      <View style={{padding: 24}}>
        <TextInput style={{borderColor: 'black', borderWidth: 1}} onChangeText={this.onUpdateText}/>
        <Text>{JSON.stringify(this.props.data)}</Text>
        <Text>{JSON.stringify(this.props.persistData)}</Text>
      </View>
    )
  }
}

const mapStateTpProps = state => ({
  data: state.data,
  persistData: state.persistData
});

const ConnectedApp = connect(mapStateTpProps)(DataComponent);

export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persister}>
          <ConnectedApp/>
        </PersistGate>
      </Provider>
    )
  }
}

