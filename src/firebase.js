import firebase from 'firebase.app';
import 'firebase/firestore';

const firebaseConfig  = firebase.initializeApp({
    apiKey: "AIzaSyDMasX9XHC3gy941Yt8aLox3XYh0UDztFM",
    authDomain: "todoist-biom.firebaseapp.com",
    databaseURL: "https://todoist-biom.firebaseio.com",
    projectId: "todoist-biom",
    storageBucket: "todoist-biom.appspot.com",
    messagingSenderId: "343151355389",
    appId: "1:343151355389:web:cb7bc66853807fb3896594"
})


export { firebaseConfig as firebase }