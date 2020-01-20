import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCqd3imeE-f-2R5UUudHBCgbH5oazDFGjc",
    authDomain: "mozaboutus.firebaseapp.com",
    databaseURL: "https://mozaboutus.firebaseio.com",
    projectId: "mozaboutus",
    storageBucket: "mozaboutus.appspot.com",
    messagingSenderId: "313874407006",
    appId: "1:313874407006:web:84fcb9d0382363ac099ecf",
    measurementId: "G-NW60M775QE"
  };


firebase.initializeApp(config);
export default firebase;