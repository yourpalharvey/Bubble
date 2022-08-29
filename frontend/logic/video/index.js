import firebase from 'firebase/app';
import 'firebase/firestore';


export const firebaseConfig = {
  apiKey: "AIzaSyAa_gVK4beOjjv3QjdHUDm2Gg6dowWUKFg",
  authDomain: "bubble-6be26.firebaseapp.com",
  projectId: "bubble-6be26",
  storageBucket: "bubble-6be26.appspot.com",
  messagingSenderId: "785519113224",
  appId: "1:785519113224:web:44c141dd21e96da992cdbd",
  measurementId: "G-WJF99NBNWN"
};

// stun servers
export const servers = {
  iceServers:[
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302']
    }
  ],
  iceCandidatePoolSize: 10,
};

export function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
