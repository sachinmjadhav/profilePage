import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Route } from "react-router-dom";

import UserContent from './ProfileContent/UserContent';
import Buddies from './ProfileContent/Buddies';
import Post from './ProfileContent/Post';
import Resume from './ProfileContent/Resume';
import Request from './ProfileContent/Request';
import Messages from './ProfileContent/Messages';


const styles = theme => ({
    heading: {
        textAlign: 'center'
    }
});


function Content(props) {
    const { classes } = props;

    const routes = [
        {
            path: "/profile/buddies",
            exact: true,
            component: Buddies
        },
        {
            path: "/profile/post",
            exact: true,
            component: Post
        },
        {
            path: "/profile/messages",
            exact: true,
            component: Messages
        },
        {
            path: "/profile/resume",
            exact: true,
            component: Resume
        },
        {
            path: "/profile/request",
            exact: true,
            component: Request
        },
        {
            path: "/profile",
            exact: true,
            component: UserContent
        }
    ];

    return (
        <div className={classes.heading}>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </div>
    )
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);