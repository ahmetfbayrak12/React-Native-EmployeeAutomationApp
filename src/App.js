import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {

    componentWillMount() {
    const config = {
        apiKey: 'AIzaSyDYB3bFDs4zUtf84Y6nMW3-8rn0sL0skg4',
        authDomain: 'manager-49805.firebaseapp.com',
        databaseURL: 'https://manager-49805.firebaseio.com',
        projectId: 'manager-49805',
        storageBucket: 'manager-49805.appspot.com',
        messagingSenderId: '831113166406'
    };

  firebase.initializeApp(config);
}
    render() {
        return(
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}

export default App;