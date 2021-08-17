import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA7ffK8vMx5NYp098qcjuDG5o5Fgknyeeg",
    authDomain: "getflix-32d65.firebaseapp.com",
    projectId: "getflix-32d65",
    storageBucket: "getflix-32d65.appspot.com",
    messagingSenderId: "1061653591095",
    appId: "1:1061653591095:web:9e1b9063e61c072190bbb2",
    measurementId: "G-46KCDQ7CGF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
 

 const auth = firebase.auth();

 const db = firebase.firestore();

 db.settings({timestampsinSnapshots : true});

 export {auth};
 export {db} ;
