import firebase from 'firebase/app'; //updates the firebase object
import 'firebase/firestore'; // runs firebase side effects
import { URLBASE } from '..';
import { postRequest } from '../requests';

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

const servers = {
  iceServers: [
  {
      urls: [
      'stun:stun1.l.google.com:19302',
      'stun:stun2.l.google.com:19302',
      ],
  },
  ],
  iceCandidatePoolSize: 10,
};


export { firestore, addStreamToDatabase, servers};

const addStreamToDatabase = async (data) => {
  const postData = {
    "signalId": data.signalId,
    "bubbleId": data.bubbleId,
    "userId": data.userId,
    "image": data.image
  }

  let response = await postRequest(`${URLBASE}/streams`, postData);

  if (response.hasOwnProperty("id"))
  {
    return response;
  }
  else
  {
    return "error";
  }

}

// TODO: get stream from database

// TODO: get all streams from a bubble