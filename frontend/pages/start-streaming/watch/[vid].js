import Head from 'next/head'
import { Background } from '../../../components/background'
import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'
import styles from '../../../styles/StartStreaming.module.css'
import VideoJs from 'video.js';
// import ResponsivePlayer from '../../components/videoPlayer';
import { FullBubble, MiniWideBubble } from '../../../components/HostedEventBubble'
// import { HostedEventsContainer } from '../../../containers/eventsContainer'
import { VideoStreamContainer } from '../../../containers/streamsContainer';
import { CurrentVideoBubble, SameEventVideoBubble } from '../../../components/streamBubble';
import { getCookie } from "cookies-next";
import { isAuth, getUsername } from "../../../logic/auth";
import { useEffect, useRef, useState } from 'react'
import { servers, firestore, getBubbleFromSignal, getStreams, getUserNameFromUserId, getUserNameFromStream } from '../../../logic/video'
import { useRouter } from "next/router";
import { ButtonBootstrap } from '../../../objects/buttonBootstrap'

export default function StreamWatch ({loggedIn, user, bubble, streams, streamData}) {

    // const [pc, setPC] = useState();
    const remoteVideoRef = useRef();

    const router = useRouter();
    const {vid} = router.query;

    // display streams
    const streamDataDisplay = streams.map(
      (stream) => <MiniWideBubble 
        key={stream.id}
        url={`start-streaming/watch/${stream.signalId}`}
        text={bubble.title}
        image={stream.image}
      />
    )


    const answerHandler = async (pc) => {
        console.log('Joining the call ....');
        // change this next line
        const callId = vid;
        const callDoc = firestore.collection('calls').doc(callId);
        const answerCandidates = callDoc.collection('answerCandidates');
        const offerCandidates = callDoc.collection('offerCandidates');
        let remoteStream = new MediaStream();
        remoteVideoRef.current.srcObject = remoteStream;
        // Pull tracks from remote stream, add to video stream
        pc.ontrack = (event) => {
            event.streams[0].getTracks().forEach((track) => {
                remoteStream.addTrack(track);
            });
        };

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


    useEffect(
        () => {
            // let pc = new RTCPeerConnection(servers);
            answerHandler(new RTCPeerConnection(servers))
            .catch(console.error);
        },
        []
    )
    

    return (
      <Background>
        <Navbar loggedIn={loggedIn}/>

        <Head>
          <title>Watch Stream</title>
          <meta
            name="description"
            content="Where live action meets livestream"
          />
          <link rel="icon" href="/logo.png" />
        </Head>

        <div className={styles.container}>
          
          <div className={styles.videoContainer}>
            <div className={styles.videoComponent}>
              <video className={styles.videoPlayer} ref={remoteVideoRef} controls autoPlay/>
            </div>
            <div className={styles.infoContainer}>
              <CurrentVideoBubble 
                text={bubble.title}
                username={streamData}
                image={bubble.image}
                url={`streams/${bubble.id}`}
              />
              {/* <br />
              <SameEventVideoBubble 
                heading="heading"
                streamScore="x Streams"
                image="/phoebeBridges.png"
              /> */}
            </div>
          </div>

          <div className={styles.streamsContainer}>
            <div className={styles.streamsTitle}>
              <h4>
                Other Streams in this bubble
              </h4>
           </div>
            <div className={styles.streamBubbleContainer}>
              {streamDataDisplay}
            </div>

          </div>

        </div>
        
        {/* <div className={styles.videoContainerParent}>
            <video className={styles.videoContainer} ref={remoteVideoRef} autoPlay/>
        </div>
        <div className={styles.videoButtonContainer}>
            <ButtonBootstrap
            text="Play"
            onClick={answerHandler}
            primaryWide={true}
            />
        </div> */}
        {/* <HostedEventsContainer title="Upcoming events"> */}
        

        <Footer loggedInJoinBubble={true}/>
      </Background>
    );
}

export const getServerSideProps = async (ctx) => {

  // get the req and res objects from context
  const {req, res} = ctx;
  const {vid} = ctx.query;

  // get the token cookie
  const token = getCookie("token", {req, res});

  // if the token exists, return wheteher it is valid, otherwise set it as false
  const valid = token != null ? await isAuth(token): false;
  const username = token!= null ? await getUsername(token) : null;

  // get bubble data from signal
  const bubble = await getBubbleFromSignal(vid);

  // get other streams
  const streams = await getStreams(bubble.id);
  
  // get streamer
  const streamData = await getUserNameFromStream(vid);



  // return props
  return {
    props: {
        loggedIn: valid,
        user: username,
        streams: streams,
        bubble: bubble,
        streamData: streamData

    }
  } 

}