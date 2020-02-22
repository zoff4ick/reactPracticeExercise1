import React, {Component} from 'react';
import './App.css';
import Card from './Card/Card';
import './Card/Card.css'
import Input from './Input/Input';
import './Input/Input.css'


class App extends Component {
    state = {
        username: 'superuser'
    };

    handleNameChanging = (event) => {
        this.setState({username: event.target.value});
    };

    render() {
        return (
            <div className="App">
                <Input changed={this.handleNameChanging} name={this.state.username}/>
                <Card name={this.state.username}/>
                <Card name="Max"/>
                <Card name="Joshua"/>
            </div>
        );
    }
}

export default App;
