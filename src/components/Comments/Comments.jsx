import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';
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

class Comments extends Component {

    state = {
        comments: ''
    }
    handleChange = (e) => {
        this.setState({
            comments: e.target.value
        })
    }
    handleClick = (e) => {
        e.preventDefault();
        this.props.dispatch({ type: 'ADD_INPUT', payload: this.state.comments || 'N/A'});
        this.props.history.push('/');
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <ProgressBar />
                        <Typography color="textSecondary" variant='title' gutterBottom>
                            Any comments you want to leave?
                        </Typography>
                        <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleClick}>
                            <TextField
                                id="standard-name"
                                label="comments"
                                className={classes.textField}
                                value={this.state.comments}
                                onChange={this.handleChange}
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

Comments.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(Comments));