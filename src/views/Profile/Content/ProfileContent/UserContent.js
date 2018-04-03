import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Modal from 'material-ui/Modal';
import {withStyles} from "material-ui/styles/index";
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const styles = theme => ({
    heading: {
        paddingTop: 20
    },
    button: {
        margin: theme.spacing.unit,
        borderRadius: 25,
        paddingLeft: 10,
        paddingRight: 10
    },
    icon: {
        paddingRight: 10
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        top: '30%',
        left: '40%'
    },
    uploadArticleBtn: {
        margin: 10
    },
    textfield: {
        marginTop: 10
    },
    input: {
        display: "none"
    },
    contentPaper: {
        margin: 50,
        marginLeft: theme.spacing.unit * 4,
        marginRight: theme.spacing.unit * 4,
        height: 200
    },
    avatar: {
        margin: 50
    }
});

class UserContent extends Component {
    state = {
        articleOpen: false,
        imageOpen: false,
        videoOpen: false
    };

    handleArticleOpen = () => {
        this.setState({ articleOpen: true })
    };
    handleImageOpen = () => {
        this.setState({ imageOpen: true })
    };
    handleVIdeoOpen = () => {
        this.setState({ videoOpen: true })
    };


    handleArticleClose = () => {
        this.setState({ articleOpen: false })
    };
    handleImageClose = () => {
        this.setState({ imageOpen: false })
    };
    handleVideoClose = () => {
        this.setState({ videoOpen: false })
    };

    render(){
        const { classes } = this.props;

        return(
            <div className={classes.heading}>
                <h2>Share an Article, Photo, Video or Idea</h2>
                <hr style={{ width: "50%" }} />

                {/*Article Button*/}
                <Button variant="raised" className={classes.button} color="primary" size="small" onClick={this.handleArticleOpen}>
                    <Icon className={classes.icon}>border_color</Icon> Write an Article
                </Button>
                <Modal open={this.state.articleOpen} onClose={this.handleArticleClose}>
                    <div className={classes.paper}>
                        <Typography variant="display1">
                            Write an Article
                        </Typography>
                        <TextField multiline={true} fullWidth={true} rows={5} rowsMax={8} placeholder="Write an Article" className={classes.textfield}/>
                        <Button className={classes.uploadArticleBtn} color="primary">
                            <Icon className={classes.icon}>file_upload</Icon> Post
                        </Button>
                    </div>
                </Modal>

                {/*Images Button*/}
                <Button variant="raised" className={classes.button} color="primary" size="small" onClick={this.handleImageOpen}>
                    <Icon className={classes.icon}>photo_camera</Icon> Images
                </Button>
                <Modal open={this.state.imageOpen} onClose={this.handleImageClose}>
                    <div className={classes.paper}>
                        <Typography variant="display1">
                            Upload an Image
                        </Typography>
                        <hr/>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="upload-image"
                            multiple
                            type="file"
                        />
                        <label htmlFor="upload-image">
                            <Button variant="flat" color="primary" component="span" className={classes.button}>
                                <Icon className={classes.icon}>file_upload</Icon> Upload Image
                            </Button>
                        </label>
                    </div>
                </Modal>

                {/*Video Button*/}
                <Button variant="raised" className={classes.button} color="primary" size="small" onClick={this.handleVIdeoOpen}>
                    <Icon className={classes.icon}>videocam</Icon>
                    Video
                </Button>
                <Modal open={this.state.videoOpen} onClose={this.handleVideoClose}>
                    <div className={classes.paper}>
                        <Typography variant="display1">
                            Upload a Video
                        </Typography>
                        <hr/>
                        <input
                            accept="video/*"
                            className={classes.input}
                            id="upload-video"
                            multiple
                            type="file"
                        />
                        <label htmlFor="upload-video">
                            <Button variant="flat" color="primary" component="span" className={classes.button}>
                                <Icon className={classes.icon}>file_upload</Icon> Upload VIdeo
                            </Button>
                        </label>
                    </div>
                </Modal>

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


export default withStyles(styles)(UserContent);