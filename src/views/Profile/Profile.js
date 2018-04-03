import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Sidebar from "./Sidebar/Sidebar";
import Content from './Content/Content';
import { Footer } from '../../components';


const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    cards: {
        padding: theme.spacing.unit * 2,
        marginTop: 10
    },
    body: {
        marginTop: 60,
    },
    hr: {
        backgroundColor: "#000",
        borderTop: 10
    }
});


function Profile(props) {
    const { classes } = props;

    return(
        <Grid container className={classes.body}>
            <Grid container>
                <Grid item xs={12} sm={3} className={classes.cards}>
                    <Sidebar/>
                </Grid>
                <Grid item xs={12} sm={9} className={classes.cards}>
                    <Content/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        </Grid>
    );
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);