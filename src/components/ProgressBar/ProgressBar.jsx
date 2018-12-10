import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    card: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
class ProgressBar extends Component {
    render() {
        const classes = this.props;
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
            <div className='progress'>
                <Typography classNames={classes.pos} variant='overline' color="secondary" >
                    Page {page} of 4
                    </Typography>
            </div>
        );
    }
}

ProgressBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect()(withRouter(withStyles(styles)(ProgressBar)));