import styles from '../../../styles/StartStreaming.module.css'
import { Background } from "../../../components/background";
import { ButtonBootstrap } from "../../../objects/buttonBootstrap";
import { Navbar } from "../../../components/navbar";
import { pc } from '../../../logic/video';
import { useEffect, useRef, useState } from 'react';
import { servers, firebaseConfig, makeid } from '../../../logic/video';
import { getFirestore, query, addDoc, doc, getDoc, setDoc, collection, updateDoc, onSnapshot } from "firebase/firestore";
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
    const [offerId, setOfferId] = useState("")
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

        // create new document
        // const docRef = collection(firestore, 'calls');
        // const callDoc = await addDoc(doc(docRef, id), {});
        
        const callDoc = await addDoc(collection(firestore, "calls"), {});
        console.log(callDoc.id.toString());
        setCallId(callDoc.id);

        

        // const callDoc = firestore.collection('calls').doc(id);
        const offerCandidates = await addDoc(collection(callDoc, `offerCandidate`), {});
        setOfferId(offerCandidates.id.toString());
        const answerCandidates = await addDoc(collection(callDoc, `answerCandidate`), {});
        setAnswerId(answerCandidates.id.toString());

        // ice candidates
        pc.onicecandidate = async (event) => {
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
        await updateDoc(callDoc, {offer});

        // listen for changes to DB
        const callDocSnap = onSnapshot(callDoc, (doc) => {
            const data = doc.data();
            if (!pc.currentRemoteDescription && data?.answer)
            {
                console.log(`answer: ${data}`);
                const answerDescription = new RTCSessionDescription(data.answer);  
                pc.setRemoteDescription(answerDescription);
            }

        })
        
        // const q = query(collection(firestore, 'calls', callId.toString(), "answerCandidate"));
        // const answerCandidatesSnap = onSnapshot(q, (snapshot) => {
        //     snapshot.docChanges().forEach((change) => {
        //         if (change.type === "added") 
        //         {
        //             const candidate = new RTCIceCandidate(change.doc.data());
        //             pc.addIceCandidate(candidate);
        //         }
        //     });
        // });

    }

    // joinCall
    const joinCall = async (id) => {
        // call id = callId
        console.log(`get documents: ${id}`)

        // define documents we need
        let docRef = doc(firestore, "calls", id.toString());
        const callDoc = await getDoc(docRef);

        let answerRef = doc(firestore, "calls", id.toString(), "answerCandidate", offerId);
        const answerCandidates = await getDoc(answerRef);
        
        let offerRef = doc(firestore, "calls", id.toString(), 'answerCandidate', answerId);
        const offerCandidates  = await getDoc(offerRef);

        // event handler
        pc.onicecandidate = async (event) => {
            event.candidate && await setDoc(answerCandidates, event.candidate.toJSON());
        }

        // call offer
        const callData = callDoc.data();
        const offerDescription = callData.offer;
        await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

        // answer
        const answerDescription = await pc.createAnswer();
        await pc.setLocalDescription(answerDescription);

        const answer = {
            sdp: answerDescription.sdp,
            type: answerDescription.type
        }
        console.log({answer});
        // await updateDoc(callDoc, {answer});

        // const q = query(doc(firestore, "calls", id.toString(), "offerCandidate", offerId))
        // const offerCandidatesSnap = onSnapshot(q, (snapshot) => {
        //     snapshot.docChanges().forEach((change) => {
        //         if (change.type === 'added')
        //         {
        //             let data = change.doc.data();
        //             pc.addIceCandidate(new RTCIceCandidate(data));
        //         }
        //     })
        // })
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
              onClick={() => joinCall(callId)}
              primaryWide={true}
            />
          </div>
        </Background>
      );

}

export default video;