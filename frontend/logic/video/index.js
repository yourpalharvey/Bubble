import firebase from 'firebase/app'; //updates the firebase object
import 'firebase/firestore'; // runs firebase side effects

const config = {
  apiKey: "AIzaSyAa_gVK4beOjjv3QjdHUDm2Gg6dowWUKFg",
  authDomain: "bubble-6be26.firebaseapp.com",
  projectId: "bubble-6be26",
  storageBucket: "bubble-6be26.appspot.com",
  messagingSenderId: "785519113224",
  appId: "1:785519113224:web:44c141dd21e96da992cdbd",
  measurementId: "G-WJF99NBNWN"
};

//initialize firebase apps if there are no initialized apps
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
//since we will be interracting with firestore, we
//grab a refference to the firestore database object and export it from this file
const firestore = firebase.firestore();


export { firestore};