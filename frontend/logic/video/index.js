import firebase from 'firebase/app'; //updates the firebase object
import 'firebase/firestore'; // runs firebase side effects
import { URLBASE } from '..';
import { getBubble } from '../bubble';
import { deleteRequest, getRequest, postRequest } from '../requests';

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

// delete stream
const deleteStream = async (data) => {
  const streamId = data;
  
  let url = `${URLBASE}/streams/delete/${streamId}`;
  // console.log(url);
  
  let response = await deleteRequest(url);
  // console.log(response);
  
  return response;
}

// TODO: get stream from database

// TODO: get all streams from a bubble
const getStreams = async (id) => {
  const streams = await getRequest(`${URLBASE}/streams/get/bubble/${id}`);
  return streams;
}


// get bubbleID from stream
const getBubbleIdFromSignal = async (id) => {
  const bubble = await getRequest(`${URLBASE}/streams/get/bubble-from-stream/${id}`);
  return bubble;
}

const getBubbleFromSignal = async(id) => {
  let bid = await getBubbleIdFromSignal(id);
  let bubble = await getBubble(bid);
  return bubble;

}

const getUserNameFromStream = async (id) => {
  const userId = await getRequest(`${URLBASE}/streams/get/user/${id}`);
  const name = await getRequest(`${URLBASE}/users/getUserFromId/${JSON.stringify(userId.username[0])}`);
  return JSON.stringify(name.username[0]);
}

export { firestore, addStreamToDatabase, servers, deleteStream, getStreams, getBubbleIdFromSignal, getBubbleFromSignal, getUserNameFromStream};