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

class Understanding extends Component {

    state = {
        understanding: ''
    }
    handleChange = (e) => {
        this.setState({
            understanding: e.target.value
        })
    }
    handleClick = (e) => {
        e.preventDefault();
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
        const { classes } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <ProgressBar />
                        <Typography color="textSecondary" variant='title' gutterBottom>
                            How well are you understanding the content?
                        </Typography>
                        <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleClick}>
                            <TextField
                                id="standard-number"
                                label="Number between 1 & 5"
                                value={this.state.understanding}
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

Understanding.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(Understanding));