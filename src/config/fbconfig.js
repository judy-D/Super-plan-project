import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDDc5rK7JJ6drAFjHTA4E0t8ugOuO2_sQE",
    authDomain: "superplan-536dc.firebaseapp.com",
    databaseURL: "https://superplan-536dc.firebaseio.com",
    projectId: "superplan-536dc",
    storageBucket: "superplan-536dc.appspot.com",
    messagingSenderId: "705227926016",
    appId: "1:705227926016:web:5f17026ab572a81cc1c6e5",
    measurementId: "G-P5GQX25N8D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
  // to update data store
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;