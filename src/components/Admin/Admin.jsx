import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
//MATERIAL-UI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

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
        const classes = this.props;
        const feedback = this.state.feedback.map( item => {
            return (
                <TableRow key={item.id}>
                    <TableCell>{item.feeling}</TableCell>
                    <TableCell>{item.understanding}</TableCell>
                    <TableCell>{item.support}</TableCell>
                    <TableCell>{item.comments}</TableCell>
                    <TableCell><button onClick={ () => this.handleDelete(item.id) }>X</button></TableCell>
                </TableRow>
            )
        })
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell numeric>Feeling</TableCell>
                            <TableCell numeric>Comprehension</TableCell>
                            <TableCell numeric>Support</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {feedback}
                    </TableBody>
                </Table>
            </Paper >
        );
    }
}

const mapReduxStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}
Admin.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(Admin));