import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyBN1Id7-JZrBZPvk5HEGiYVngnEpMddBhk",
  authDomain: "chat-app-a4b96.firebaseapp.com",
  projectId: "chat-app-a4b96",
  storageBucket: "chat-app-a4b96.appspot.com",
  messagingSenderId: "843397182711",
  appId: "1:843397182711:web:47e58b04535a95e3f88ff2",
  measurementId: "G-QZ1S1XXW6M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db =firebase.firestore();
export {db, auth};
export default firebase;