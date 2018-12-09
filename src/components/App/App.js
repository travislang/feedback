import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
//import component pages for routes
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Success from '../Success/Success';

import Admin from '../Admin/Admin';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact component={Feeling}></Route>
                    <Route path="/2" component={Understanding}></Route>
                    <Route path="/3" component={Support}></Route>
                    <Route path="/4" component={Comments}></Route>
                    <Route path="/success" component={Success}></Route>
                    <Route path="/admin" component={Admin}></Route>
                </div>
            </Router>

        );
    }
}

export default App;