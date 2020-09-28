import firebase from 'firebase';
//App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4iDNH_fPf65dmAGjFREQHQ_jHMCs1ZEw",
  authDomain: "project5-16351.firebaseapp.com",
  databaseURL: "https://project5-16351.firebaseio.com",
  projectId: "project5-16351",
  storageBucket: "project5-16351.appspot.com",
  messagingSenderId: "188499920009",
  appId: "1:188499920009:web:6c6332896151214c0ab258",
  measurementId: "G-6F6HD55E6L"

};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 export default firebase;