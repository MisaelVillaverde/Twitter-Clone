import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAsAXKztPfFVBbeXdeU9LT_K8vU7GEV8K8',
  authDomain: 'twitter-clone-58e2b.firebaseapp.com',
  databaseURL: 'https://twitter-clone-58e2b.firebaseio.com',
  projectId: 'twitter-clone-58e2b',
  storageBucket: 'twitter-clone-58e2b.appspot.com',
  messagingSenderId: '83661024149',
  appId: '1:83661024149:web:ae19e2ba5db5159d2d649c',
  measurementId: 'G-YK2HV94E4M',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
