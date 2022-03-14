import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyACdLxFfEoNE2imn9Fn934zsCRPoH6E4IQ",
    authDomain: "personal-website-89f29.firebaseapp.com",
    projectId: "personal-website-89f29",
    storageBucket: "personal-website-89f29.appspot.com",
    messagingSenderId: "1071528693517",
    appId: "1:1071528693517:web:012590bf3a6b94373b2a44",
    measurementId: "G-6XZNBLQY2V"
};

firebase.initializeApp(firebaseConfig);

export default firebase;