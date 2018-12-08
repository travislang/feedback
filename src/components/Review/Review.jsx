import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {


    render() {
        return (
            <div>
                <h3>Your Feedback</h3>
                <p>feeling: {this.props.reduxStore.feedback[0]}</p>
                <p>understanding: {this.props.reduxStore.feedback[1]}</p>
                <p>support: {this.props.reduxStore.feedback[2]}</p>
                <p>comments: {this.props.reduxStore.feedback[3]}</p>
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

export default connect(mapReduxStateToProps)(Review);