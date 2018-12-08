import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    state = {
        comments: ''
    }
    handleChange = (e) => {
        this.setState({
            comments: e.target.value
        })
    }
    handleClick = () => {
        this.props.dispatch({ type: 'ADD_INPUT', payload: this.state.comments });
        this.props.history.push('/')
    }


    render() {
        return (
            <div>
                <p>Any comments you want to leave?</p>
                <input type="text" onChange={this.handleChange}
                    value={this.state.comments} />
                <button onClick={this.handleClick}>Next</button>
            </div>
        );
    }
}

export default connect()(Comments);