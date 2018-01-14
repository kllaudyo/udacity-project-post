import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllCategories, getAllPosts } from '../utils/api';
import { initCategories, initPosts } from '../actions';
import './App.css';
import Header from './Header';
import HomeView from './HomeView';
import PostView from './PostView';


class App extends Component {

    componentDidMount(){

        const { initCategories } = this.props;

        getAllCategories()
            .then(response => {
                initCategories(response);
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className="App">
                <Header brand="alert('');"/>
                <Route exact path="/" render={() => <HomeView />} />
                <Route path="/post/:id" render={({match}) => <PostView id={match.params.id} />} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    ownProps
});

const mapDispatchToProps = dispatch => ({
    initCategories(categories){
        dispatch(initCategories(categories));
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));