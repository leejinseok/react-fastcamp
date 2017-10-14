import React, { Component } from 'react';
import { Route } from 'react-router-dom'; 
import { Home, About } from 'pages';
import Menu from 'components/Menu';

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Home} />
                <Route path="/about/:name?" component={About} />
            </div>
        );
    }
}

export default App;