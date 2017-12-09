import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBNcpyg5-UjPvVRO2zWMpdlf3Rl2GuOcOU',
      authDomain: 'manager-20832.firebaseapp.com',
      databaseURL: 'https://manager-20832.firebaseio.com',
      projectId: 'manager-20832',
      storageBucket: 'manager-20832.appspot.com',
      messagingSenderId: '379774366409'
    };
    Firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={(store)}>
        <Router />
      </Provider>
    );
  }
}

export default App;
