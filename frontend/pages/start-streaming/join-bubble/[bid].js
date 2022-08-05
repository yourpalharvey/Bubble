import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react";
import { Background } from "../../../components/background";
import { Navbar } from "../../../components/navbar";
import { Button } from "../../../objects/button";
import styles from '../../../styles/StartStreaming.module.css'

const bubbleStream = ({}) => {
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
        router.push('/')
        router.reload('/')
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
            {/*<Navbar />*/}
            <video
                className={styles.videoContainer}
                ref={videoRef}
            />
            <div className={styles.videoButtonContainer}>
                <Button
                    text="Stop streaming"
                    onClick={endStream}
                    wide={true}
                />
            </div>

            
        </Background>
    )
}

export const getServerSideProps = async (context) => {

    // check geolocation and account
    return {
        props: {}
    }
}


export default bubbleStream;