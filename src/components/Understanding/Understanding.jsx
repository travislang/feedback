import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

    state = {
        understanding: ''
    }
    handleChange = (e) => {
        this.setState({
            understanding: e.target.value
        })
    }
    handleClick = () => {
        this.props.dispatch({ type: 'ADD_INPUT', payload: this.state });
        this.props.history.push('/3')
    }


    render() {
        console.log(this.state);

        return (
            <div>
                <p>How well are you understanding the content? </p>
                <input type="number" onChange={this.handleChange}
                    value={this.state.understanding} />
                <button onClick={this.handleClick}>Next</button>
            </div>
        );
    }
}

export default connect()(Understanding);