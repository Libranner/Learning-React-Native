import React, { Component } from 'react';
import { View } from 'react-native';
import Firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null }

    componentWillMount() {
        Firebase.initializeApp({
            apiKey: 'AIzaSyCJZR7ZrefpDhKTpoMHZgMSUMKa5JXx7Po',
            authDomain: 'authenticatiom-95cba.firebaseapp.com',
            databaseURL: 'https://authenticatiom-95cba.firebaseio.com',
            projectId: 'authenticatiom-95cba',
            storageBucket: 'authenticatiom-95cba.appspot.com',
            messagingSenderId: '772437314375'
        });

        Firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => Firebase.auth().signOut()}> Log Out </Button>
                    </CardSection>   
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
