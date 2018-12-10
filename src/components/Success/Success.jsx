import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Success extends Component {
    handleClick = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <Grid container direction='column' justify='center'>
                <Grid item xs={12} justify='center'>
                    <Typography color="textSecondary" align='center' variant='h1' gutterBottom>
                        Thank You!
                    </Typography>
                    <Button color='primary' size='large' variant='outlined' onClick={this.handleClick}>Leave New Feedback</Button>
                </Grid>
            </Grid>
        );
    }
}

export default connect()(Success);