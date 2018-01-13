import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedIndex: null
        }
        this.onSelectIndex = this.onSelectIndex.bind(this);
    }

    onSelectIndex(index){
        this.setState({selectedIndex:index});
    }

    render() {
        const { selectedIndex } = this.state;
        return (
            <main className="App">
                <Header brand="alert('');"/>
                <Menu>
                    <MenuItem selectedIndex={selectedIndex} index="all" onSelect={this.onSelectIndex}>All</MenuItem>
                    <MenuItem selectedIndex={selectedIndex} index="test" onSelect={this.onSelectIndex}>Test</MenuItem>
                    <MenuItem selectedIndex={selectedIndex} index="another-test" onSelect={this.onSelectIndex}>Another Test</MenuItem>
                </Menu>
            </main>
        );
    }
}

export default App;
