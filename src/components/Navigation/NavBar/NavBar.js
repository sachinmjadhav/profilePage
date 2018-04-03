import React, { Component } from 'react';
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, Hidden, IconButton } from 'material-ui';
import { Link } from "react-router-dom";
import { NavbarLinks } from '../../';
import MenuIcon from 'material-ui-icons/Menu';
import './NavBar.css';

class NavBar extends Component {
    render() {
        const { title } = this.props;
        return (
            <AppBar position="fixed" color="default" className="navbar">
                <Toolbar className='app-navbar-container'>
                    <div className='app-title'>
                        <Link to="/">
                            <Typography variant="headline" color="inherit" >{title}</Typography>
                        </Link>
                    </div>
                    <Hidden smDown>
                        <NavbarLinks {...this.props} />
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </AppBar>
        );
    }

}
NavBar.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired
};

export default NavBar;
