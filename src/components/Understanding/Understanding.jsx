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
        if (this.state.understanding < 0 || this.state.understanding > 5) {
            alert('Please enter a value between 1 & 5.');
            this.setState({
                feeling: ''
            })
            return;
        }
        this.props.dispatch({ type: 'ADD_INPUT', payload: this.state.understanding });
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