import React, { Component } from 'react';
import CardArray from '../components/CardArray';
// import { robot } from './robot';
import SearchBar from '../components/SearchBar';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robot:[],
            searchField: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>response.json())
            .then(users =>  this.setState({ robot: users }))
        
    }
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }
    
    render() {
        const { robot, searchField } = this.state;
        const filteredRobots = robot.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });
        if (robot.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (<div className="tc">
                <h1 className="f1">ROBOFRIENDS</h1>
                <SearchBar searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardArray robot={ filteredRobots }/>
                </Scroll>  
            </div>
            );
        } 
    }
}

export default App;