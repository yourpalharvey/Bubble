import styles from '../../../styles/StartStreaming.module.css'
import { Background } from "../../../components/background";
import { ButtonBootstrap } from "../../../objects/buttonBootstrap";
import { Navbar } from "../../../components/navbar";
import { useEffect, useRef, useState } from 'react';
import { firestore} from '../../../logic/video';
import { TextInput } from '../../../objects/textInput';

// 26-as-a-developer-i-would-like-a-backend-that-allows-users-to-stream-video

export default function Video() {

    const webcamButtonRef = useRef();
    const webcamVideoRef = useRef();
    const callButtonRef = useRef();
    const callInputRef = useRef();
    const answerButtonRef = useRef();
    const remoteVideoRef = useRef();
    const hangupButtonRef = useRef();
    const videoDownloadRef = useRef();
    const[pc, setPC] = useState()

    // let videoUrl = null;

    // let recordedChunks = [];

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
    // const pc = new RTCPeerConnection(servers);
    let localStream = null;
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
        localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
        });

        // set remote Stream to a mediaStream object
        remoteStream = new MediaStream();

        // Push tracks from local stream to peer connection
        localStream.getTracks().forEach((track) => {
        pc.addTrack(track, localStream);
        });

        // Pull tracks from remote stream, add to video stream
        pc.ontrack = (event) => {
        event.streams[0].getTracks().forEach((track) => {
            remoteStream.addTrack(track);
        });
        };

        // set video sources
        webcamVideoRef.current.srcObject = localStream;
        remoteVideoRef.current.srcObject = remoteStream;
    };

    const callHandler = async () => {
        console.log('Starting callid generation .... ');
        // Reference Firestore collections for signaling
        const callDoc = firestore.collection('calls').doc();
        const offerCandidates = callDoc.collection('offerCandidates');
        const answerCandidates = callDoc.collection('answerCandidates');

        callInputRef.current.value = callDoc.id;
        //setCallID(callDoc.id.toString());

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

        // if all is successful, add the stream to the database
    };

    const answerHandler = async () => {
        console.log('Joining the call ....');
        // change this next line
        const callId = callInputRef.current.value;
        const callDoc = firestore.collection('calls').doc(callId);
        const answerCandidates = callDoc.collection('answerCandidates');
        const offerCandidates = callDoc.collection('offerCandidates');

        pc.onicecandidate = (event) => {
        event.candidate && answerCandidates.add(event.candidate.toJSON());
        };
        console.log('pc', pc);

        const callData = (await callDoc.get()).data();

        const offerDescription = callData.offer;
        await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

        const answerDescription = await pc.createAnswer();
        await pc.setLocalDescription(answerDescription);

        const answer = {
            type: answerDescription.type,
            sdp: answerDescription.sdp,
        };

        await callDoc.update({ answer });

        offerCandidates.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            console.log(change);
            if (change.type === 'added') {
            let data = change.doc.data();
            pc.addIceCandidate(new RTCIceCandidate(data));
            }
        });
        });
    };

    const hangupHandler = () => {
        console.log('Hanging up the call ...');
        localStream.getTracks().forEach((track) => track.stop());
        remoteStream.getTracks().forEach((track) => track.stop());

        // mediaRecorder.onstop = async (event) => {
        // let blob = new Blob(recordedChunks, {
        //     type: 'video/webm',
        // });

        // await readFile(blob).then((encoded_file) => {
        //     uploadVideo(encoded_file);
        // });

        // videoDownloadRef.current.href = URL.createObjectURL(blob);
        // videoDownloadRef.current.download =
        //     new Date().getTime() + '-locastream.webm';
        // };
        // console.log(videoDownloadRef);
    };
    
    return (
        <Background>
          <div className={styles.videoContainerParent}>
            <video className={styles.videoContainer} ref={webcamVideoRef} autoPlay/>
            <video className={styles.videoContainer} ref={remoteVideoRef} autoPlay/>
          </div>
          <div className={styles.videoButtonContainer}>
            <ButtonBootstrap
              text="Start Camera"
              onClick={webCamHandler}
              primaryWide={true}
            />
            <ButtonBootstrap
              text="Start Call"
              onClick={callHandler}
              primaryWide={true}
            />
            <input ref={callInputRef} />
            <ButtonBootstrap
              text="Answer Call"
              onClick={answerHandler}
              primaryWide={true}
            />
          </div>
        </Background>
      );

}