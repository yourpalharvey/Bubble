import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react";
import { Background } from "../../../components/background";
import { ButtonBootstrap } from "../../../objects/buttonBootstrap";
import styles from '../../../styles/StartStreaming.module.css'

const bubbleStream = ({loggedIn, user}) => {
    const router = useRouter();
    const {bid} = router.query;

    // handle video
    const videoRef = useRef(null);
    const [stream, setStream] = useState(null);
    const getVideo = async () => {
        try
        {
            const streamer = await navigator.mediaDevices.getUserMedia({ video: true })
            let video = videoRef.current;
            video.srcObject = streamer;
            video.play();
            setStream(streamer)
        }
        catch (err)
        {
            console.error(err)
        }
    
    };

    // end stream and turn off camera
    const endStream = () => {
        stream.getTracks()[0].stop()
        window.close()
    }

    useEffect(
        () => {
            getVideo();
            console.log(navigator)
        },
        []
    );

    return (
      <Background>
        <Navbar loggedIn={loggedIn}/>
        <video className={styles.videoContainer} ref={videoRef} />
        <div className={styles.videoButtonContainer}>
          <ButtonBootstrap
            text="Stop streaming"
            onClick={endStream}
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