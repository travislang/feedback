import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

    state = {
        feeling: 0
    }
    handleChange = (e) => {
        this.setState({
            feeling: e.target.value
        })
    }
    handleClick = () => {
        this.props.dispatch({type: 'ADD_INPUT', payload: this.state.feeling});
        this.props.history.push('/2')
    }


    render() {
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