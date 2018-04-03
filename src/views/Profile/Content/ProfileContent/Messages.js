import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
        paddingTop: 20
    },
    contentPaper: {
        margin: 50,
        marginLeft: theme.spacing.unit * 4,
        marginRight: theme.spacing.unit * 4,
        height: 200
    }
});

class Messages extends Component {
    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography variant="display2">Messages</Typography>
                <Paper className={classes.contentPaper} elevation={10}>

                </Paper>
                <Paper className={classes.contentPaper} elevation={10}>

                </Paper>
                <Paper className={classes.contentPaper} elevation={10}>

                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(Messages);