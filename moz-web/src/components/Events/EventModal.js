import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import firebase from './firebase';
import Gallery from '../Gallery';


const useStyles = makeStyles(theme => ({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


function EventModal({event, open, handleClose}) {
    const classes = useStyles();
   

    if(!event.title)
    {
        return <div></div>;
    }
    
    
    return (
      <div class="container">
        
        <Dialog
          fullScreen
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
        {/* <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {event.title}
            </Typography>
          </Toolbar>
        </AppBar> */}
        <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h2" className={classes.title}>
              <center>{event.title}</center>
            </Typography>
          </Toolbar>
          <br></br>
          <hr width="50%"/>
         <Typography variant="h6" >
            {event.description}
        </Typography> 
        <br></br>

            {/*<DialogTitle id="alert-dialog-slide-title">
              {event.name} - 
            </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description" dangerouslySetInnerHTML={{__html: event.description}}>
                
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
    </DialogActions>*/}
    <center><Gallery name={event.title} key={event.title}/></center>


        </Dialog>
      </div>
    );
  }
export default EventModal;