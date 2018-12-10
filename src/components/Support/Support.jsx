import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import Header from '../Header/Header';
import ProgressBar from '../ProgressBar/ProgressBar';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    card: {
        minWidth: 275,
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

class Support extends Component {

    state = {
        support: ''
    }
    handleChange = (e) => {
        this.setState({
            support: e.target.value
        })
    }
    handleClick = (e) => {
        e.preventDefault();
        if (this.state.support < 0 || this.state.support > 5) {
            alert('Please enter a value between 1 & 5.');
            this.setState({
                feeling: ''
            })
            return;
        }
        this.props.dispatch({ type: 'ADD_INPUT', payload: this.state.support });
        this.props.history.push('/4')
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <ProgressBar />
                        <Typography color="textSecondary" variant='title' gutterBottom>
                            How well are you being supported? 
                        </Typography>
                        <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleClick}>
                            <TextField
                                id="standard-number"
                                label="Number between 1 & 5"
                                value={this.state.support}
                                onChange={this.handleChange}
                                type="number"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                            />
                        </form>
                    </CardContent>
                    <CardActions>
                        <Grid container justify='flex-end'>
                            <Button size="small" variant='outlined' color="primary" onClick={this.handleClick}>Next</Button>
                        </Grid>
                    </CardActions>
                </Card>
                <Review />
            </div>
        );
    }
}

Support.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(Support));