import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';
import Card from "../Card";

class HomeView extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedIndex: "all"
        };
        this.onSelectIndex = this.onSelectIndex.bind(this);
    }

    onSelectIndex(index){
        this.setState({selectedIndex:index});
    }

    static renderMenuItens(categories, selectedIndex, onSelectIndex){
        return [
            {name:"All", path:"all"},
            ...categories
        ].map(({ name, path }) => (
            <MenuItem key={path} selectedIndex={selectedIndex} index={path} onSelect={onSelectIndex}>{name}</MenuItem>
        ));
    }

    static renderContainer(posts){
        return posts
            .filter(post => !post.deleted)
            .map( ({id, author, title}) => (
                <Link key={id} to={(`/post/${id}`)}>
                    <Card title={author} desc={title}/>
                </Link> )
            )
    }

    render(){
        const { selectedIndex } = this.state;
        const { categories, posts } = this.props;
        return (
            <React.Fragment>
                <Menu>
                    {HomeView.renderMenuItens(categories, selectedIndex, this.onSelectIndex)}
                </Menu>
                <div className="container">
                    {HomeView.renderContainer(posts)}
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

export default connect(mapStateToProps)(HomeView);