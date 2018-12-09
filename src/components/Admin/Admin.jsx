import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Admin extends Component {

    getFeedback = () => {
        axios.get('/feedback')
        .then( res => {
            console.log( res );
            
        }).catch( err => {
            console.log( 'error in GET route:', err );
            
        })
    }

    componentDidMount() {
        this.getFeedback();
    }
    render() {
        return (
            <p>test</p>
        );
    }
}

const mapReduxStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapReduxStateToProps)(Admin);