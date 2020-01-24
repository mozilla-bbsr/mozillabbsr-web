import React, { useState, useEffect } from 'react'
import firebase from './firebase';
import EventModal from './EventModal';
import Event from './Event'
import Typography from '@material-ui/core/Typography';


function Events()
{
  const useFirestoreQuery = (eventRef) => {
    const [dataState, setDataState] = useState({
      isLoading: true,
      data: null
    });
    useEffect(() => {

      eventRef.on('value', (snapshot) => {
        let events = snapshot.val();
        let newData = []
        for (let event in events)
        {
          newData.push({
            title: events[event].title,
            hashtags: events[event].hashtags,
            description: events[event].description
          });
        }
        setDataState({
          isLoading: false,
          data: newData
        })
      });
    }, []);
    return dataState;
  }
  
  const ref = firebase.database().ref("events");
  const { isLoading, data } = useFirestoreQuery(ref);
    let events = []
    if(data)
    {
      data.map(
        doc => {events.push(doc)}
      )

    }

  
  
  //firestore fetch

 
    /*const useFirestoreQuery = (ref) => {
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
    }*/

    
  
    /*

   const ref = firebase.firestore().collection('mozilla-frontweb').doc('events');
    const { isLoading, data } = useFirestoreQuery(ref);
    let events = []
    if(data)
    {
      data.docs.map(
        doc => {events.push(doc.data())}
      )

    }
    */
  //modal
  const [open, setOpen] = React.useState(false);
    const [selectedEvent, selectEvent] = useState({});
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
                {events.map(
                    (event)=> <Event event={event} onClick={() =>{
                        handleClickOpen();
                        selectEvent(event)}}/>
                )
          }
        </div>
    );
}

export default Events;