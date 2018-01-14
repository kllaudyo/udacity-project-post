import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Header from './Header';
import HomeView from './HomeView';
import PostView from './PostView';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header brand="alert('');"/>
                <Route exact path="/" render={() => <HomeView />} />
                <Route path="/:id" render={({match}) => <PostView id={match.params.id} />} />
            </div>
        );
    }
}

export default connect()(App);