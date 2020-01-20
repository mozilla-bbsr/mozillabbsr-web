import React, { useState, useEffect } from 'react'
import firebase from './firebase';
import EventModal from './EventModal';
import Event from './Event'
import Typography from '@material-ui/core/Typography';


function Events()
{
  //firestore fetch
    const useFirestoreQuery = (ref) => {
      const [docState, setDocState] = useState({
        isLoading: true,
        data: null
      });
      useEffect(() => {
        return ref.onSnapshot(docs => {
          setDocState({
            isLoading: false,
            data: docs
          });
        });
      }, []);
      return docState;
    }
    const ref = firebase.firestore().collection('events');
    const { isLoading, data } = useFirestoreQuery(ref);
    let events = []
    if(data)
    {
      data.docs.map(
        doc => {events.push(doc.data())}
      )

    }
  //modal
  const [open, setOpen] = React.useState(false);
    const [selectedEvent, selectEvent] = React.useState({});
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    

    return(
      <div>

      
        <Typography variant="h2">
          Events
        </Typography>
          <EventModal open={open} event={selectedEvent} handleClose={handleClose}/>
          {
                events.map(
                    event=> <Event event={event} onClick={() =>{
                        handleClickOpen();
                        selectEvent(event)}}/>
                )
          }
        </div>
    );
}

export default Events;