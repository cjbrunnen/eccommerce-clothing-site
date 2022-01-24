import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCwbHQfYCIiQyslIIHnwFiDLAPXigbaNJw",
  authDomain: "crwn-db-67b4b.firebaseapp.com",
  projectId: "crwn-db-67b4b",
  storageBucket: "crwn-db-67b4b.appspot.com",
  messagingSenderId: "384181868013",
  appId: "1:384181868013:web:fb4b087e97ecb5c8c143e4",
  measurementId: "G-GR8BKVVDVY"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
