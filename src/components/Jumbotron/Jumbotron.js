import React from 'react';
import PropTypes from "prop-types";
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import './Jumbotron.css'

const styles = theme => ({
  jumbotronBgImg: {
    [theme.breakpoints.down('xs')]: {
      backgroundPosition: '30%',
    }
  }
});

function Jumbotron(props) {
  const { classes, image, children } = props;
  return (
    <div style={{ backgroundImage: "url(" + image + ")" }} className={`page-header header-filter ${classes.jumbotronBgImg}`} >
      {children}
    </ div>
  );
}
Jumbotron.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired
};
Jumbotron.defaultProps = {
  children: ''
};

export default compose(withStyles(styles), withWidth())(Jumbotron);