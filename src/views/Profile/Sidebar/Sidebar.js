import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';


const styles = (theme) => ({
    username: {
        textAlign: 'center'
    },
    list: {
        textAlign: 'center'
    },
    stars: {
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit
    },
    paper: {
        overflow: 'hidden',
        width: '90%',
        height: 'auto',
        borderRadius: '50%',
        marginLeft: 15,
        justifyContent: 'center'
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: '50%'
    }
});



function Sidebar(props) {
    const { classes } = props;
    return (
        <div>
            <Card>
                <Link to="/profile">
                    <Paper elevation={0} circle='true' className={classes.paper}>
                        <img src="https://img.huffingtonpost.com/asset/58332e14180000230c30f3d3.jpeg?ops=scalefit_720_noupscale" alt="Dave" className={classes.img}/>
                    </Paper>
                </Link>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2" className={classes.username}>
                        <Link to="/profile"> Dave Chappelle </Link>
                    </Typography>
                    <Divider />
                    <List className={classes.align}>
                        <Link to="/profile/buddies">
                            <ListItem button className={classes.list}>
                                <ListItemText primary="Buddies" />
                            </ListItem>
                        </Link>
                        <Link to="/profile/post">
                            <ListItem button className={classes.list}>
                                <ListItemText primary="Post" />
                            </ListItem>
                        </Link>
                        <Link to="/profile/resume">
                            <ListItem button className={classes.list}>
                                <ListItemText primary="Resume" />
                            </ListItem>
                        </Link>
                        <Link to="/profile/request">
                            <ListItem button className={classes.list}>
                                <ListItemText primary="Request" />
                            </ListItem>
                        </Link>
                        <Link to="/profile/messages">
                            <ListItem button className={classes.list}>
                                <ListItemText primary="Messages" />
                            </ListItem>
                        </Link>
                        <ListItem style={{ justifyContent: 'center'}}>
                            <div>
                                <Icon>star</Icon>
                                <Icon>star</Icon>
                                <Icon>star</Icon>
                                <Icon>star</Icon>
                                <Icon>star_half</Icon>
                            </div>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </div>
    );
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);