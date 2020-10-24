import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import friendsReducer from './src/redux/reducer';
import Home from './app/Home';

const store = createStore(friendsReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}