import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import RouterComponent from './src/Router';

export default class App extends React.Component {

  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyC8Npr5W74Gsc4ZOv0GqoHPai_wX7492QM',
    authDomain: 'manager-4fbd3.firebaseapp.com',
    databaseURL: 'https://manager-4fbd3.firebaseio.com',
    projectId: 'manager-4fbd3',
    storageBucket: 'manager-4fbd3.appspot.com',
    messagingSenderId: '301346101442'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store} >
        <RouterComponent />
      </Provider>
    );
  }
}
