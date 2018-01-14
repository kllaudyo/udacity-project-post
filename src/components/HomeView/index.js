import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';
import {getAllCategories, getAllPosts} from '../../utils/api';
import {initCategories, initPosts} from '../../actions';
import Card from "../Card";

class HomeView extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedIndex: "all"
        };
        this.onSelectIndex = this.onSelectIndex.bind(this);
    }

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

    onSelectIndex(index){
        this.setState({selectedIndex:index});
    }

    render(){
        const { selectedIndex } = this.state;
        const { categories, posts } = this.props;
        console.log(this.props);
        return (
            <React.Fragment>
                <Menu>
                    <MenuItem selectedIndex={selectedIndex} index="all" onSelect={this.onSelectIndex}>All</MenuItem>
                    {categories.map(category => {
                        const { name, path } = category;
                        return ( <MenuItem key={path} selectedIndex={selectedIndex} index={path} onSelect={this.onSelectIndex}>{name}</MenuItem> )
                    })}
                </Menu>
                <div className="container">
                    {posts.filter(post => !post.deleted).map(post => {
                        const {id, author, title} = post;
                        return ( <Card key={id} title={author} desc={title}/> )
                    })}
                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = ({categories, posts}, ownProps) => ({
    categories,
    posts,
    ...ownProps
});

const mapDispatchToProps = dispatch => ({
    initCategories(categories){
        dispatch(initCategories(categories));
    },
    initPosts(posts){
        dispatch(initPosts(posts));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);