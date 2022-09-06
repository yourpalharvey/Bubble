import styles from '../../../styles/StartStreaming.module.css'
import { Background } from "../../../components/background";
import { ButtonBootstrap } from "../../../objects/buttonBootstrap";
import { Navbar } from "../../../components/navbar";
import { useEffect, useRef, useState } from 'react';
import { addStreamToDatabase, deleteStream, firestore, servers} from '../../../logic/video';
import { TextInput } from '../../../objects/textInput';
import { postRequest } from '../../../logic/requests';
import { useRouter } from "next/router";
import { getCookie } from 'cookies-next';
import { isAuth, getUsername, getId } from "../../../logic/auth";

// 26-as-a-developer-i-would-like-a-backend-that-allows-users-to-stream-video

const Video = ({loggedIn, user, id}) => {

    const router = useRouter();
    const {bid} = router.query;

    // const webcamButtonRef = useRef();
    const webcamVideoRef = useRef();
    // const callButtonRef = useRef();
    const callInputRef = useRef();
    // const answerButtonRef = useRef();
    const remoteVideoRef = useRef();
    // const hangupButtonRef = useRef();
    // const videoDownloadRef = useRef();
    const [button, setButton] = useState(true);
    const [localStream, setLocalStream] = useState(null);
    const[pc, setPC] = useState()
    const [callId_, setCallId] = useState();


    
    //let localStream = null;
    let remoteStream = null;
    var options = { mimeType: 'video/webm; codecs=vp9' };
    let mediaRecorder = null;

    useEffect(
        () => {
            setPC(new RTCPeerConnection(servers));
        },
        []
    )

    // open webcam
    const webCamHandler = async () => {
        // get webcam stream
        let localStream_ = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
        });
        

        // set remote Stream to a mediaStream object
        remoteStream = new MediaStream();

        // Push tracks from local stream to peer connection
        localStream_.getTracks().forEach((track) => {
        pc.addTrack(track, localStream_);
        });

        // Pull tracks from remote stream, add to video stream
        pc.ontrack = (event) => {
        event.streams[0].getTracks().forEach((track) => {
            remoteStream.addTrack(track);
        });
        };

        // set video sources
        webcamVideoRef.current.srcObject = localStream_;
        // remoteVideoRef.current.srcObject = remoteStream;
        setLocalStream(localStream_);

    };

    const callHandler = async () => {
        await webCamHandler();
        setButton(false);
        console.log('Starting callid generation .... ');
        // Reference Firestore collections for signaling
        const callDoc = firestore.collection('calls').doc();
        const offerCandidates = callDoc.collection('offerCandidates');
        const answerCandidates = callDoc.collection('answerCandidates');

        // callInputRef.current.value = callDoc.id;

        // Get candidates for caller, save to db
        pc.onicecandidate = (event) => {
            event.candidate && offerCandidates.add(event.candidate.toJSON());
        };

        // Create offer
        const offerDescription = await pc.createOffer();
        await pc.setLocalDescription(offerDescription);

        const offer = {
            sdp: offerDescription.sdp,
            type: offerDescription.type,
        };

        await callDoc.set({ offer });

        // Listen for remote answer
        callDoc.onSnapshot((snapshot) => {
        const data = snapshot.data();
        if (!pc.currentRemoteDescription && data?.answer) {
            const answerDescription = new RTCSessionDescription(data.answer);
            pc.setRemoteDescription(answerDescription);
        }
        });

        // When answered, add candidate to peer connection
        answerCandidates.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
            const candidate = new RTCIceCandidate(change.doc.data());
            pc.addIceCandidate(candidate);
            }
        });
        });

        // hangupButtonRef.current.disabled = false;

        // add signal to database
        let data = {
            "signalId": callDoc.id.toString(),
            "bubbleId": bid,
            "userId": id,
            "image": "",
        }
        console.log(data);
        const response = await addStreamToDatabase(data);
        console.log(response);
        setCallId(callDoc.id);
        
    };


    // const answerHandler = async () => {
    //     console.log('Joining the call ....');
    //     // change this next line
    //     const callId = callInputRef.current.value;
    //     const callDoc = firestore.collection('calls').doc(callId);
    //     const answerCandidates = callDoc.collection('answerCandidates');
    //     const offerCandidates = callDoc.collection('offerCandidates');

    //     pc.onicecandidate = (event) => {
    //     event.candidate && answerCandidates.add(event.candidate.toJSON());
    //     };
    //     console.log('pc', pc);

    //     const callData = (await callDoc.get()).data();

    //     const offerDescription = callData.offer;
    //     await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

    //     const answerDescription = await pc.createAnswer();
    //     await pc.setLocalDescription(answerDescription);

    //     const answer = {
    //         type: answerDescription.type,
    //         sdp: answerDescription.sdp,
    //     };

    //     await callDoc.update({ answer });

    //     offerCandidates.onSnapshot((snapshot) => {
    //     snapshot.docChanges().forEach((change) => {
    //         console.log(change);
    //         if (change.type === 'added') {
    //         let data = change.doc.data();
    //         pc.addIceCandidate(new RTCIceCandidate(data));
    //         }
    //     });
    //     });
    // };

    const hangupHandler = async () => {
        console.log('Hanging up the call ...');
        localStream.getTracks().forEach((track) => track.stop());
        // remoteStream.getTracks().forEach((track) => track.stop());

        // delete stream
        const deleted = await deleteStream(callId_);

        window.close();
    };
    
    return (
        <Background>
            <div className={styles.videoContainerParent}>
                <video className={styles.videoContainer} ref={webcamVideoRef} autoPlay/>
                {/*<video className={styles.videoContainer} ref={remoteVideoRef} autoPlay/>*/}
            </div>
            {button === true &&
                <div className={styles.videoButtonContainer}>
                    <ButtonBootstrap
                    text="Start Stream"
                    onClick={callHandler}
                    primaryWide={true}
                    />
                </div>
            }
            {button === false &&
                <div className={styles.videoButtonContainer}>
                    <ButtonBootstrap
                    text="End Stream"
                    onClick={hangupHandler}
                    primaryWide={true}
                    />
                </div>
            }
        </Background>
      );

}

export default Video;

export const getServerSideProps = async (ctx) => {

    // get the req and res objects from context
    const {req, res} = ctx;
  
    // get the token cookie
    const token = getCookie("token", {req, res});
  
    // if the token exists, return wheteher it is valid, otherwise set it as false
    const valid = token != null ? await isAuth(token): false;
    const username = token!= null ? await getUsername(token) : null;
    const id_ = token!= null ? await getId(token) : null;
  
    // check location
  
    // return props
    return {
      props: {
          loggedIn: valid,
          user: username,
          id: id_
      }
    } 
  
}