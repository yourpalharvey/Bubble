// import { useRouter } from "next/router"
// import { useEffect, useRef, useState } from "react";
// import { Background } from "../../../components/background";
// import { Navbar } from "../../../components/navbar";
// import { ButtonCustom } from "../../../objects/buttonCustom";
// import styles from '../../../styles/StartStreaming.module.css'

// const bubbleStream = ({}) => {
//     const router = useRouter();
//     const {bid} = router.query;

//     // handle video
//     const videoRef = useRef(null);
//     const [stream, setStream] = useState(null);
//     const getVideo = async () => {
//         try
//         {
//             const streamer = await navigator.mediaDevices.getUserMedia({ video: true })
//             let video = videoRef.current;
//             video.srcObject = streamer;
//             video.play();
//             setStream(streamer)
//         }
//         catch (err)
//         {
//             console.error(err)
//         }
    
//     };

//     // end stream and turn off camera
//     const endStream = () => {
//         stream.getTracks()[0].stop()
//         window.close()
//     }

//     useEffect(
//         () => {
//             getVideo();
//             console.log(navigator)
//         },
//         []
//     );

//     return (
//       <Background>
//         {/*<Navbar />*/}
//         <video className={styles.videoContainer} ref={videoRef} />
//         <div className={styles.videoButtonContainer}>
//           <ButtonCustom text="Stop streaming" onClick={endStream} wide={true} />
//         </div>
//       </Background>
//     );
// }

// export const getServerSideProps = async (context) => {

//     // check geolocation and account
//     return {
//         props: {}
//     }
// }


// export default bubbleStream;
import { useEffect, useRef, useState } from "react";
import { Background } from "../../../components/background";
import { ButtonCustom } from "../../../objects/buttonCustom";
import styles from '../../../styles/StartStreaming.module.css'


const CAMERA_CONSTRAINTS = {
  audio: true,
  video: { width: 1920, height: 1080 }
};

const WS_SERVER_CONFIG = {
  protocol: "ws",
  hostname: "localhost",
  port: 8999
};

const getRecorderSettings = () => {
    const settings = {};
    if (MediaRecorder.isTypeSupported('video/mp4')) {
      settings.format = 'mp4';
      settings.video = 'h264';
      settings.audio = 'aac';
    } else {
      settings.format = 'webm';
      settings.audio = 'opus';
      settings.video = MediaRecorder.isTypeSupported('video/webm;codecs=h264') ? 'h264' : 'vp8';
    }
    return settings;
}
const getRecorderMimeType = () => {
    const settings = getRecorderSettings();
    const codecs = settings.format === 'webm' ? `;codecs="${settings.video}, ${settings.audio}"` : '';
    return `video/${settings.format}${codecs}`;
}


const bubbleStream = ({streamKey}) => {

  // states
  const [connected, setConnected] = useState(false);
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [streaming, setStreaming] = useState(false);

  // refs
  const inputStreamRef = useRef();
  const videoRef = useRef();
  const wsRef = useRef();
  const mediaRecorderRef = useRef();
  const canvasRef = useRef();
  const requestAnimationRef = useRef();

  const startCamera = async () => {
    
    // get camera input (wait)
    inputStreamRef.current = await navigator.mediaDevices.getUserMedia(CAMERA_CONSTRAINTS);

    // set camera input as video player source
    videoRef.current.srcObject = inputStreamRef.current;

    // play video in video player
    await videoRef.current.play();

    // We need to set the canvas height/width to match the video element.
    canvasRef.current.height = videoRef.current.clientHeight;
    canvasRef.current.width = videoRef.current.clientWidth;

    // unknown
    requestAnimationRef.current = requestAnimationFrame(updateCanvas);

    // set camera enabled as true
    setCameraEnabled(true);
  }

  // update canvas
  const updateCanvas = () => {
    if (videoRef.current.ended || videoRef.current.paused) {
      return;
    }

    const ctx = canvasRef.current.getContext('2d');

    ctx.drawImage(
      videoRef.current,
      0,
      0,
      videoRef.current.clientWidth,
      videoRef.current.clientHeight
    );

    requestAnimationRef.current = requestAnimationFrame(updateCanvas);
  };

  // stop streaming function
  const stopStreaming = () => {
    // update mediaRecorderRef to stop
    mediaRecorderRef.current.state === 'recording' ? mediaRecorderRef.current.stop() : console.log('not streaming');
    
    // set streaming to false
    setStreaming(false);

    // close window
    window.close();
  }

  // start streaming function
  const startStreaming = () => {
    setStreaming(true);

    // create websocket connection
    // const settings = getRecorderSettings();
    const wsUrl = new URL(`${WS_SERVER_CONFIG.protocol}://${WS_SERVER_CONFIG.hostname}:${WS_SERVER_CONFIG.port}`);
    // wsUrl.searchParams.set('video', settings.video);
    // wsUrl.searchParams.set('audio', settings.audio);

    wsRef.current = new WebSocket(
        wsUrl
    );

    // add event listeners for open and close
    wsRef.current.addEventListener('open', function open() {
      setConnected(true);
    });

    wsRef.current.addEventListener('close', () => {
      setConnected(false);
      stopStreaming();
    });

    wsRef.current.addEventListener('message', (message) => {
        console.log(message);
    });

    // capture stream at 30fps (1920x1080@30fps)
    const videoOutputStream = canvasRef.current.captureStream(30);

    // audio
    const audioStream = new MediaStream();
    const audioTracks = inputStreamRef.current.getAudioTracks();
    audioTracks.forEach(function(track) {
      audioStream.addTrack(track);
    });

    // combine the audio and video
    const outputStream = new MediaStream();
    [audioStream, videoOutputStream].forEach(function(s) {
        s.getTracks().forEach(function(t) {
            outputStream.addTrack(t);
        });
    });
    
    // configure output stream
    mediaRecorderRef.current = new MediaRecorder(outputStream, {
      mimeType: getRecorderMimeType(),
      videoBitsPerSecond: 3000000,
      audioBitsPerSecond: 64000,
    });
    
    //  when data is available, send the data to the server
    mediaRecorderRef.current.addEventListener('dataavailable', (e) => {
      wsRef.current.send(e.data);
    });
    
    // when the data stops, close the connection to websocket
    mediaRecorderRef.current.addEventListener('stop', () => {
      stopStreaming();
      wsRef.current.close();
    });

    // start stream
    mediaRecorderRef.current.start(1000);
  };

  useEffect(() => {
    return () => {
      cancelAnimationFrame(requestAnimationRef.current);
    }
  }, []);

  

  return (
    <Background>
      {/*<Navbar />*/}
      <div className={styles.videoContainer}>
      
        <div className={styles.video}>
          <video width="100%" height="auto" muted ref={videoRef} />
        </div>
        <div className={styles.canvas}>
          <canvas ref={canvasRef}></canvas>
        </div>

      </div>
      
      <div className={styles.videoButtonContainer}>
        {!cameraEnabled ? <ButtonCustom text="Enable camera" onClick={startCamera} wide={true}/> : <></>}
        {(cameraEnabled && !streaming) ? <ButtonCustom text="Start streaming" onClick={startStreaming} wide={true} /> : <></>}
        {(cameraEnabled && streaming) ? <ButtonCustom text="Stop streaming" onClick={stopStreaming} wide={true} /> : <></>}
      </div>
    </Background>
  );  
}

export const getServerSideProps = async (context) => {

    // check geolocation and account

    // get stream key from backend
    return {
        props: {
          streamKey: 12345
        }
    }
}


export default bubbleStream;
