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
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch(error) {
      console.log('error creating user:', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
