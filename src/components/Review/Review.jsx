import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Review extends Component {
    handleSubmit = () => {
        let feedback = {
            feeling: this.props.reduxStore.feedback[0],
            understanding: this.props.reduxStore.feedback[1],
            support: this.props.reduxStore.feedback[2],
            comments: this.props.reduxStore.feedback[3]
        }
        axios.post('/feedback', feedback)
        .then( res => {
            console.log(res);
            this.props.dispatch({ type: 'CLEAR_INPUTS'});
            this.props.history.push('/success');
        })
        .catch( err => {
            console.log( 'error in post route:', err );
        })
    }

    render() {
        let button;
        if( this.props.reduxStore.feedback.length === 4 ) {
            button = <button onClick={this.handleSubmit}>Submit</button>
        }
        else {
            button = <button disabled>Incomplete</button>
        }
        return (
            <div>
                <h3>Your Feedback</h3>
                <p>feeling: {this.props.reduxStore.feedback[0]}</p>
                <p>understanding: {this.props.reduxStore.feedback[1]}</p>
                <p>support: {this.props.reduxStore.feedback[2]}</p>
                <p>comments: {this.props.reduxStore.feedback[3]}</p>
                {button}
            </div>
        );
    }
}


    //this makes this.props.reduxStore
const mapReduxStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapReduxStateToProps)(withRouter(Review));