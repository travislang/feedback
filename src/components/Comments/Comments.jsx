import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import Header from '../Header/Header';

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
        this.props.dispatch({ type: 'ADD_INPUT', payload: this.state.comments || 'N/A'});
        this.props.history.push('/');
    }


    render() {
        return (
            <div>
                <Header />
                <p>Any comments you want to leave?</p>
                <input type="text" onChange={this.handleChange}
                    value={this.state.comments} />
                <button onClick={this.handleClick}>Next</button>
                <Review />
            </div>
        );
    }
}

export default connect()(Comments);