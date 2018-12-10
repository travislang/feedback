import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    card: {
        minWidth: 275,
        margin: 40
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class Review extends Component {
    handleSubmit = () => {
        let feedback = {
            feeling: this.props.reduxStore.feedback[0],
            understanding: this.props.reduxStore.feedback[1],
            support: this.props.reduxStore.feedback[2],
            comments: this.props.reduxStore.feedback[3]
        }
        axios.post('/feedback', feedback)
        .then( res => {
            console.log(res);
            this.props.dispatch({ type: 'CLEAR_INPUTS'});
            this.props.history.push('/success');
        })
        .catch( err => {
            console.log( 'error in post route:', err );
        })
    }

    render() {
        const { classes } = this.props;
        let button;
        if( this.props.reduxStore.feedback.length === 4 ) {
            button = <Button color='primary' variant='outlined' onClick={this.handleSubmit}>Submit</Button>
        }
        else {
            button = <Button color='secondary' variant='outlined' disabled>Incomplete</Button>
        }
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography color="primary" align='center' variant='h4' gutterBottom>
                        Your Feedback
                    </Typography>
                    <Typography color="textSecondary" variant='title' gutterBottom>
                        feeling: {this.props.reduxStore.feedback[0]}
                    </Typography>
                    <Typography color="textSecondary" variant='title' gutterBottom>
                        understanding: {this.props.reduxStore.feedback[1]}
                    </Typography>
                    <Typography color="textSecondary" variant='title' gutterBottom>
                        support: {this.props.reduxStore.feedback[2]}
                    </Typography>
                    <Typography color="textSecondary" variant='title' gutterBottom>
                        comments: {this.props.reduxStore.feedback[3]}
                    </Typography>
                    <CardActions>
                        <Grid container justify='center'>
                            {button}
                        </Grid>
                    </CardActions>
                </CardContent>
            </Card>
        );
    }
}


    //this makes this.props.reduxStore
const mapReduxStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

Review.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withRouter(withStyles(styles)(Review)));