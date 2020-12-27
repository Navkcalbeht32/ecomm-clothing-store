import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD4HHVNc2JC6pxfVqHO8VXLgn5Nc1JJ2cY",
    authDomain: "h-and-h-dad9f.firebaseapp.com",
    projectId: "h-and-h-dad9f",
    storageBucket: "h-and-h-dad9f.appspot.com",
    messagingSenderId: "1032123269891",
    appId: "1:1032123269891:web:0433deb2bfca3a00a25f36",
    measurementId: "G-T2P46WFXDT"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;