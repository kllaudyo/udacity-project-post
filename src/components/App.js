import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import HomeView from "./HomeView";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header brand="alert('');"/>
                <Route exact path="/" render={() => <HomeView />} />
            </div>
        );
    }
}

export default App;
