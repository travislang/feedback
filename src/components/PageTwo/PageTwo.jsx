import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

    state = {
        understanding: ''
    }
    handleChange = (e) => {
        this.setState({
            understanding: e.target.value
        })
    }
    handleClick = () => {
        this.props.dispatch({ type: 'ADD_INPUT', payload: this.state })
    }


    render() {
        console.log(this.state);

        return (
            <div>
                <p>How are you feeling today?</p>
                <input type="number" onChange={this.handleChange}
                    value={this.state.feeling} />
                <button onClick={this.handleClick}>Next</button>
            </div>
        );
    }
}

export default connect()(Home);