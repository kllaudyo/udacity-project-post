import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';
import { getAllCategories } from '../../utils/api';
import { initCategories } from '../../actions';

class HomeView extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedIndex: "all"
        };
        this.onSelectIndex = this.onSelectIndex.bind(this);
    }

    componentDidMount(){

        const { initCategories } = this.props;

        getAllCategories()
            .then(response => {
                initCategories(response);
            })
            .catch(err => console.error(err));

    }

    onSelectIndex(index){
        this.setState({selectedIndex:index});
    }

    render(){
        const { selectedIndex } = this.state;
        const { categories } = this.props;
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
                    Todos posts
                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = ({categories}, ownProps) => ({
    categories,
    ...ownProps
});

const mapDispatchToProps = dispatch => ({
    initCategories(categories){
        dispatch(initCategories(categories));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);