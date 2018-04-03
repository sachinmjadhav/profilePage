import React from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { Button, withStyles } from 'material-ui';
import { HelmetComponent } from '../../';
import PropTypes from "prop-types";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        borderRadius: '30px',
        boxShadow: 'none',
        color: '#000'
    },
});
const NavbarLinks = withRouter(props => {
    const { routes, classes } = props;
    const activeRoute = (routeName) => {
        return props.location.pathname.indexOf(routeName) > -1 ? true : false;
    }
    return (
        routes.map((route) => {
            if (route.redirect) return null;
            const color = activeRoute(route.path) ? "primary" : "default";
            const variant = activeRoute(route.path) ? "raised" : "flat";
            return (
                [
                    activeRoute(route.path) &&
                    <HelmetComponent key="documentTitle"
                        documentTitle={route.documentTitle}
                        documentDescription={route.documentDescription}
                    />
                    , (!route.skipInNavBar) &&
                    <NavLink
                        to={route.path}
                        key={route.id}
                    >
                        <Button
                            color={color}
                            variant={variant}
                            className={classes.button}
                        >{route.navbarName}</Button>
                    </NavLink>
                ]
            )
        })
    );
}
);

NavbarLinks.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NavbarLinks);