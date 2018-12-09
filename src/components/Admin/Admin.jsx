import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

class Admin extends Component {

    getFeedback = () => {
        Axios.get('/')
        .then( res => {
            
        }).catch( err => {
            console.log( 'error in GET route:', err );
            
        })
    }
    render() {
        return (

        );
    }
}

const mapReduxStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapReduxStateToProps)(Admin);