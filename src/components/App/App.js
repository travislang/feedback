import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
//IMPORT COMPONENTS FOR ROUTES
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';
//MATERIAL-UI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import blue from '@material-ui/core/colors/blue';
import 'typeface-roboto';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: {
            main: '#f44336',
        },
    },
});
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

class App extends Component {
    render() {
        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <div>
                        <Grid container
                         justify='center'
                         spacing={32}>
                            <Grid item xs={12}>
                                <Header />
                            </Grid>
                            <Grid item xs={8}>
                                <Route path="/" exact component={Feeling}></Route>
                            </Grid>
                            <Grid item xs={8}>
                                <Route path="/2" component={Understanding}></Route>
                            </Grid>
                            <Grid item xs={8}>
                                <Route path="/3" component={Support}></Route>
                            </Grid>
                            <Grid item xs={8}>
                                <Route path="/4" component={Comments}></Route>
                            </Grid>
                            <Grid item xs={8}>
                                <Route path="/success" component={Success}></Route>
                            </Grid>
                            <Grid item xs={12}>
                                <Route path="/admin" component={Admin}></Route>
                            </Grid>
                        </Grid>
                    </div>
                </MuiThemeProvider>
            </Router>

        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);