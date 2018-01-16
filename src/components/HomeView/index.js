import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import sortBy from 'sort-by';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';
import Card from "../Card";

class HomeView extends Component{

    constructor(props){
        super(props);
        this.onSelectIndex = this.onSelectIndex.bind(this);
    }

    onSelectIndex(index){
        this.props.history.push(index === "all" ? "/" : `/category/${index}`);
    }

    static renderMenuItens(categories, selectedIndex, onSelectIndex){
        return [
            {name:"All", path:"all"},
            ...categories
        ].map(({ name, path }) => (
            <MenuItem key={path} selectedIndex={selectedIndex} index={path} onSelect={onSelectIndex}>{name}</MenuItem>
        ));
    }

    static renderContainer(posts, path){
        return posts
            .filter(post => !post.deleted && (post.category === path || path === "all") )
            .map( ({id, author, title}) => (
                <Link key={id} to={(`/post/${id}`)}>
                    <Card title={author} desc={title}/>
                </Link> )
            )
    }

    render(){
        const { categories, posts, path = "all" } = this.props;
        return (
            <React.Fragment>
                <Menu>
                    {HomeView.renderMenuItens(categories, path, this.onSelectIndex)}
                    <select>
                        <option>Vote score</option>
                        <option>Date</option>
                    </select>
                </Menu>
                <div className="container">
                    {HomeView.renderContainer(posts.sort(sortBy('-voteScore')), path)}
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

export default withRouter(connect(mapStateToProps)(HomeView));