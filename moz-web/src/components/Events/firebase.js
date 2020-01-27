import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyAEO7TzDunkkbTIQ1t6jHGfy8bsRgk4Oc4",
  authDomain: "mozilla-frontweb.firebaseapp.com",
  databaseURL: "https://mozilla-frontweb.firebaseio.com",
  projectId: "mozilla-frontweb",
  storageBucket: "mozilla-frontweb.appspot.com",
  messagingSenderId: "1046099848833",
  appId: "1:1046099848833:web:1b88431f33fb5acfa6a780",
  measurementId: "G-3JYT0L9N06"
  };



 /*  const config = {
     apiKey: "AIzaSyCqd3imeE-f-2R5UUudHBCgbH5oazDFGjc",
     authDomain: "mozaboutus.firebaseapp.com",
     databaseURL: "https://mozaboutus.firebaseio.com",
     projectId: "mozaboutus",
     storageBucket: "mozaboutus.appspot.com",
     messagingSenderId: "313874407006",
     appId: "1:313874407006:web:84fcb9d0382363ac099ecf",
     measurementId: "G-NW60M775QE"
   };
  */
firebase.initializeApp(config);
export default firebase;