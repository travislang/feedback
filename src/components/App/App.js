import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from '../Home/Home';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                </header>
                <Route path="/" exact component={Home}></Route>
                <Route path="/2" component={Understanding}></Route>
                <Route path="/3" component={Support}></Route>
                <Route path="/4" component={Comments}></Route>
            </div>
        </Router>
      
    );
  }
}

export default App;
