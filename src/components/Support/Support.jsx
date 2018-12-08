import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    state = {
        support: ''
    }
    handleChange = (e) => {
        this.setState({
            support: e.target.value
        })
    }
    handleClick = () => {
        this.props.dispatch({ type: 'ADD_INPUT', payload: this.state.support });
        this.props.history.push('/4')
    }


    render() {
        return (
            <div>
                <p>How well are you being supported? </p>
                <input type="number" onChange={this.handleChange}
                    value={this.state.support} />
                <button onClick={this.handleClick}>Next</button>
            </div>
        );
    }
}

export default connect()(Support);