import React, { Component } from 'react';
import PropTypes from "prop-types";
import { AppBar, Toolbar, Hidden, IconButton } from 'material-ui';
import { Link } from "react-router-dom";
import { NavbarLinks } from '../../';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';
import './NavBar.css';

class NavBar extends Component {
  state = {
    anchorEl: null
  };
  
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  };
  
  handleClose = () => {
    this.setState({ anchorEl: null })
  };
  
  render() {
    const { anchorEl } = this.state;
    const { title } = this.props;
    return (
      <AppBar position="fixed" color="default" className="navbar">
        <Toolbar className='app-navbar-container'>
          <div className='app-title'>
            <Link to="/">
              {title}
            </Link>
          </div>
          <Hidden smDown>
            <NavbarLinks {...this.props} />
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="Menu"
              aria-owns={anchorEl ? 'simple-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <Link to="/">
                <MenuItem onClick={this.handleClose}>
                  Home
                </MenuItem>
              </Link>
              <Link to="/profile">
                <MenuItem onClick={this.handleClose}>
                  Profile
                </MenuItem>
              </Link>
              <Link to="/services">
                <MenuItem onClick={this.handleClose}>
                  Services
                </MenuItem>
              </Link>
              <Link to="/about">
                <MenuItem onClick={this.handleClose}>
                  About Us
                </MenuItem>
              </Link>
              <Link to="/contact">
                <MenuItem onClick={this.handleClose}>
                  Contact Us
                </MenuItem>
              </Link>
            </Menu>
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
