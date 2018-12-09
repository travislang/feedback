import React, { Component } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h3>Feedback</h3>
                <ProgressBar />
            </div>
        );
    }
}

export default Header;