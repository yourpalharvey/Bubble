import styles from '../../../styles/StartStreaming.module.css'
import { Background } from "../../../components/background";
import { ButtonBootstrap } from "../../../objects/buttonBootstrap";
import { Navbar } from "../../../components/navbar";
import { pc } from '../../../logic/video';
import { useEffect, useRef, useState } from 'react';
import { servers, firebaseConfig, makeid } from '../../../logic/video';
import { getFirestore, query, addDoc, QuerySnapshot, setDoc, collection, updateDoc, onSnapshot } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { TextInput } from '../../../objects/textInput';

// 26-as-a-developer-i-would-like-a-backend-that-allows-users-to-stream-video

const video = () => {

    useEffect(
        () => {
            const peerCon = new RTCPeerConnection(servers);
            const app = initializeApp(firebaseConfig);
            const fireStore = getFirestore(app);
            setPc(peerCon);
            setFirestore(fireStore);
        },
        []
    )
    

    // state for lcoal and remote streams
    const [localStream, setLocalStream] = useState(null);
    const [remoteStream, setRemoteStream] = useState(null);
    const [pc, setPc] = useState()
    const [firestore, setFirestore] = useState();
    const [callId, setCallId] = useState("");
    const [answerId, setAnswerId] = useState("");

    // set refs for local and remote video
    const webcamVideo = useRef(null);
    const remoteVideo = useRef(null);

    // start Camera
    const startWebcam = async () => {
        // set up local stream
        // let streamLocal = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
        let streamLocal = await navigator.mediaDevices.getUserMedia({video: true});
        // setLocalStream(streamLocal);

        // set up remote stream
        let streamRemote = new MediaStream();

        // make them available for DOM
        streamLocal.getTracks().forEach((track) => {
            pc.addTrack(track, streamLocal);
        });
        pc.ontrack = event => {
            event.streams[0].getTracks().forEach(track => {
                streamRemote.addTrack(track);
            });
        };

        // set video src's respectively
        webcamVideo.current.srcObject = streamLocal;
        remoteVideo.current.srcObject = streamRemote;

    }

    // start call
    const startCall = async () => {
        // create id
        const id = makeid(12);

        // create new document
        // const docRef = collection(firestore, 'calls');
        // const callDoc = await addDoc(doc(docRef, id), {});
        
        const callDoc = await addDoc(collection(firestore, "calls"), {});
        console.log(callDoc.id);
        setCallId(callDoc.id);

        

        // const callDoc = firestore.collection('calls').doc(id);
        const offerCandidates = await addDoc(collection(callDoc, `offerCandidate`), {});
        const answerCandidates = await addDoc(collection(callDoc, `answerCandidate`), {});


        // ice candidates
        pc.onicecandidate = async (event) => {
            console.log("ice candidate")
            console.log(event?.candidate)
            event.candidate && await setDoc(offerCandidates, event.candidate.toJSON())
        }

        // create offer
        const offerDescription = await pc.createOffer();
        await pc.setLocalDescription(offerDescription);

        // create offer as JS Object
        const offer = {
            sdp: offerDescription.sdp,
            type: offerDescription.type
        };

        // send to DB
        await updateDoc(callDoc, offer);

        // listen for changes to DB
        const callDocSnap = onSnapshot(callDoc, (doc) => {
            const data = doc.data();
            if (!pc.currentRemoteDescription && data?.answer)
            {
                const answerDescription = new RTCSessionDescription(data.answer);  
                pc.setRemoteDescription(answerDescription);
            }

        })
        
        const q = query(collection(firestore, "answerCandidate"));
        const answerCandidatesSnap = onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") 
                {
                    const candidate = new RTCIceCandidate(change.doc.data());
                    pc.addIceCandidate(candidate);
                }
            });
        });

    }

    // joinCall
    const joinCall = async () => {
        // call id = callId
        const callDoc = firestore.collection('calls').doc('callId');
        const answerCandidates = callDoc.collection('answerCandidates');

        // event handler
        pc.onicecandidate = event => {
            event.candidate && answerCandidates.add(event.candidate.toJSON());
        }

        // call data
        const callData = (await callDoc.get()).data();

        // offer
        const offerDescription = callData.offer();
        await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

        // answer
        const answerDescription = await pc.createAnswer();
        await pc.setLocalDescription(answerDescription);

        const answer = {
            type: answerDescription.type,
            sdp: answerDescription.sdp,
        }

        await callDoc.update({answer});

        offerCandidates.onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                console.log(change);
                if (change.type === 'added')
                {
                    let data = change.doc.data();
                    pc.addIceCandidate(new RTCIceCandidate(data));

                }
            })
        })
    }
    
    return (
        <Background>
          <div className={styles.videoContainerParent}>
            <video className={styles.videoContainer} ref={webcamVideo} autoPlay/>
            <video className={styles.videoContainer} ref={remoteVideo} autoPlay/>
          </div>
          <div className={styles.videoButtonContainer}>
            <ButtonBootstrap
              text="Start Camera"
              onClick={startWebcam}
              primaryWide={true}
            />
            <ButtonBootstrap
              text="Start Call"
              onClick={startCall}
              primaryWide={true}
            />
            <TextInput name="callId" value={callId} onChange={setCallId}/>
            <ButtonBootstrap
              text="Answer Call"
              onClick={joinCall}
              primaryWide={true}
            />
          </div>
        </Background>
      );

}

export default video;