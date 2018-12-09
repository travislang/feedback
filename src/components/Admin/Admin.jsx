import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Admin extends Component {

    state = {
        feedback: []
    }
    getFeedback = () => {
        axios.get('/feedback')
        .then( res => {
            this.setState({
                feedback: res.data
            })
            console.log(res);
            
        }).catch( err => {
            console.log( 'error in GET route:', err );
            
        })
    }
    handleDelete = (id) => {
        axios.delete(`/feedback/${id}`)
        .then( res => {
            this.getFeedback();
        })
        .catch( err => {
            console.log( 'eror in DELETE route:', err );
            
        })
    }

    componentDidMount() {
        this.getFeedback();
    }
    render() {
        const feedback = this.state.feedback.map( item => {
            return (
                <tr key={item.id}>
                    <td>{item.feeling}</td>
                    <td>{item.understanding}</td>
                    <td>{item.support}</td>
                    <td>{item.comments}</td>
                    <td><button onClick={ () => this.handleDelete(item.id) }>X</button></td>
                </tr>
            )
        })
        return (
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {feedback}
                </tbody>
            </table>
        );
    }
}

const mapReduxStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapReduxStateToProps)(Admin);