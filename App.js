import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import reducers from "./reducers";
import { Home } from './src/screens';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);


export default function App() {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Home />
      <StatusBar style="auto" />
    </Provider >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
