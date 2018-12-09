import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProgressBar extends Component {
    render() {
        let page;
        switch(this.props.history.location.pathname) {
            case '/':
                page = 1;
                break;
            case '/2':
                page = 2;
                break;
            case '/3':
                page = 3;
                break;
            case '/4':
                page = 4;
                break;
            default:
                return;
        }
        return (
            <div>
                <h4>Page {page} of 4</h4>
            </div>
        );
    }
}

export default connect()(withRouter(ProgressBar));