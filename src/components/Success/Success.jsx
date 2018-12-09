import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Success extends Component {
    handleClick = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h2>Thank You!</h2>
                <button onClick={this.handleClick}>Leave New Feedback</button>
            </div>
        );
    }
}

export default connect()(Success);