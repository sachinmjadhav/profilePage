import React, { Component } from 'react';
import PropTypes from "prop-types";
import { AppBar, Toolbar, Hidden, IconButton } from 'material-ui';
import { Link } from "react-router-dom";
import { NavbarLinks } from '../../';
import { withStyles } from 'material-ui/styles';
import MenuIcon from 'material-ui-icons/Menu';
import ListItemText from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import './NavBar.css';

const styles = theme => ({
  menuList: {
      marginLeft: 30
  }
});

class NavBar extends Component {
  state = {
    top: false
  };
  
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  
  render() {
    const { title, classes } = this.props;
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
              aria-haspopup="true"
              onClick={this.toggleDrawer('top', true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('top', false)}
                onKeyDown={this.toggleDrawer('top', false)}
                className={classes.menuList}
              >
                  <Link to="/">
                    <ListItemText>Home</ListItemText>
                  </Link>
              </div>
  
              <div
                tabIndex={1}
                role="button"
                onClick={this.toggleDrawer('top', false)}
                onKeyDown={this.toggleDrawer('top', false)}
                className={classes.menuList}
              >
                  <Link to="/profile">
                      <ListItemText>Profile</ListItemText>
                  </Link>
              </div>
  
              <div
                tabIndex={2}
                role="button"
                onClick={this.toggleDrawer('top', false)}
                onKeyDown={this.toggleDrawer('top', false)}
                className={classes.menuList}
              >
                  <Link to="/services">
                      <ListItemText>Services</ListItemText>
                  </Link>
              </div>
  
              <div
                tabIndex={3}
                role="button"
                onClick={this.toggleDrawer('top', false)}
                onKeyDown={this.toggleDrawer('top', false)}
                className={classes.menuList}
              >
                  <Link to="/about">
                      <ListItemText>About Us</ListItemText>
                  </Link>
              </div>
  
              <div
                tabIndex={4}
                role="button"
                onClick={this.toggleDrawer('top', false)}
                onKeyDown={this.toggleDrawer('top', false)}
                className={classes.menuList}
              >
                  <Link to="/contact">
                      <ListItemText>Contact Us</ListItemText>
                  </Link>
              </div>
              
            </Drawer>
          </Hidden>
        </Toolbar>
      </AppBar>
    );
  }
}

NavBar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);