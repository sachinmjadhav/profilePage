import React, { Component } from 'react';
import {withStyles} from "material-ui/styles/index";
import { Facebook, Twitter, Linkedin } from 'mdi-material-ui';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';


const styles = {
   content: {
       backgroundColor: '#c0c0c0',
       height: 200,
       textAlign: 'center'
   },
   main: {
       paddingTop: 50
   },
    icons: {
       margin: 10,
       fontSize: 30
    },
    divider: {
        backgroundColor: "black",
        width: '100%'
    }
};


class Footer extends Component {
    render(){
        const { classes } = this.props;

        return(
            <div className={classes.content}>
                <Divider className={classes.divider} />
                <div className={classes.main}>
                    <IconButton>
                        <Facebook className={classes.icons}/>
                    </IconButton>
                    <IconButton>
                        <Twitter className={classes.icons} />
                    </IconButton>
                    <IconButton>
                        <Linkedin className={classes.icons} />
                    </IconButton>
                </div>
                <br/>
                <Typography variant="subheading">
                    Copyright &copy; 2018 by AAVVIS
                </Typography>
            </div>
        );
    }
}

export default withStyles(styles)(Footer);