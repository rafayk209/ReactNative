
import firebase from 'firebase/app';
import 'firebase/auth';
import Constants from 'expo-constants';

const firebaseConfig = {
  apiKey: "AIzaSyB1YAHHLMsuYR6Fl_dv0_GLSvHTJn9g3YI",
  authDomain: "production-react-final.firebaseapp.com",
  projectId: "production-react-final",
  storageBucket: "production-react-final.appspot.com",
  messagingSenderId: "995183365330",
  appId: "1:995183365330:web:168fbe5aa6a880ead8b10b"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };