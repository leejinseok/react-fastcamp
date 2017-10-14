import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'; 
import { Home, About } from 'pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about/:name?" component={About} />
            </div>
        );
    }
}

export default App;