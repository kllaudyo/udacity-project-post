import React, { Component } from 'react';
import { withRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllCategories, getAllPosts } from '../utils/api';
import { initCategories, initPosts } from '../actions';
import './App.css';
import Header from './Header';
import HomeView from './HomeView';
import PostView from './PostView';


class App extends Component {

    componentDidMount(){

        const { initCategories, initPosts } = this.props;

        getAllCategories()
            .then(response => {
                initCategories(response);
            })
            .catch(err => console.error(err));

        getAllPosts()
            .then(response => {
                initPosts(response);
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className="App">
                <Header brand="alert('Leitura');"/>
                <Route exact path="/" render={() => <HomeView />} />
                <Route exact path="/category/:path" render={({match}) => <HomeView path={match.params.path} />} />
                <Route path="/post/:id" render={({match}) => <PostView id={match.params.id} />} />
                <div className="fab-button-add"><Link to="/post/">Adicionar</Link></div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    state,
    ownProps
});

const mapDispatchToProps = dispatch => ({
    initCategories(categories){
        dispatch(initCategories(categories));
    },
    initPosts(posts){
        dispatch(initPosts(posts));
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));