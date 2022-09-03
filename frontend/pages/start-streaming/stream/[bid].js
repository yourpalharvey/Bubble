import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react";
import { Background } from "../../../components/background";
import { ButtonBootstrap } from "../../../objects/buttonBootstrap";
import styles from '../../../styles/StartStreaming.module.css'
import { getCookie } from "cookies-next";
import { isAuth, getUsername } from "../../../logic/auth";
import { Navbar } from "../../../components/navbar";
import { pc } from "../../../logic/video";

const bubbleStream = ({loggedIn, user}) => {
    const router = useRouter();
    const {bid} = router.query;

    // handle video
    const videoRef = useRef(null);
    const remoteRef = useRef(null);
    
    const [stream, setStream] = useState(null);
	const [remoteStream, setRemoteStream] = useState(null);
    const [buttonText, setButtonText] = useState("Start Streaming")

    // handle swap buttonText
    const toggleButtonText = () => {
      setButtonText(buttonText === "Start Streaming" ? "Stop Streaming" : "Start Streaming");
    };

    const getVideo = async () => {
        try
        {
            // set local stream
			const streamer = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            setStream(streamer);

			// set remote Stream
			const remoteStreamer = new MediaStream();
			setRemoteStream(remoteStreamer);

			return true;
        }
        catch (err)
        {
            console.error(err)
        }
    
    };

    // handle Start Stream
    const startStream = async () => {
		// get the video feed form webcam
		const setVideo = await getVideo();

		// send to server, add to Stream database: bubbleId, StreamId, UserId

	
		// push tracks from localStream to peer connection
		stream.getTracks().forEach((track) => {
			pc.addTrack(track, stream);
		});
		
		// pull tracks from remote stream, add to video Stream
		pc.ontrack = event => {
			event.streams[0].getTracks().forEach(track => {
				remoteStream.addTrack(track);
			});
		}
		
		// show on screen
		let video = videoRef.current;
		video.srcObject = stream;
        video.play();
		let remoteVideo = remoteRef.current;
		remoteVideo.srcObject = remoteStream;
		remoteVideo.play();




    }

    // const end Stream
    const endStream = () => {
      stream.getTracks()[0].stop()
      window.close()
    }

    const toggleStream = () => {
      if (buttonText === "Start Stream")
      {
        startStream()
      }
      else
      {
        endStream()
      }
      toggleButtonText;
    }

    return (
      <Background>
        <Navbar loggedIn={loggedIn}/>
        <div className={styles.videoContainerParent}>
          <video className={styles.videoContainer} ref={videoRef} />
          <video className={styles.videoContainer} ref={remoteRef} />
        </div>
        <div className={styles.videoButtonContainer}>
          <ButtonBootstrap
            text={buttonText}
            onClick={startStream}
            primaryWide={true}
          />
        </div>
      </Background>
    );
}

export const getServerSideProps = async (ctx) => {

    // get the req and res objects from context
    const {req, res} = ctx;
  
    // get the token cookie
    const token = getCookie("token", {req, res});
  
    // if the token exists, return wheteher it is valid, otherwise set it as false
    const valid = token != null ? await isAuth(token): false;
    const username = token!= null ? await getUsername(token) : null;
  
    // check location
  
    // return props
    return {
      props: {
          loggedIn: valid,
          user: username,
      }
    } 
  
  }



export default bubbleStream;


