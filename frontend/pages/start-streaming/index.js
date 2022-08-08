import Head from 'next/head';
import { MobileView, isMobile } from 'react-device-detect'
import { Background } from '../../components/background';
import { Navbar } from '../../components/navbar';
import { Button } from '../../objects/button';
import styles from '../../styles/StartStreaming.module.css'
import {useRouter} from 'next/router'
import { Shadow } from '../../objects/shadow';
import { useEffect, useState } from 'react';
import { Select } from '../../components/select';

const startStream= (props) => {

    // handle going back
    const router = useRouter();

    // state for available bubbles
    const [bubbles, setBubbles] = useState([]);
    const [currentBubble, setCurrentBubble] = useState();

    // function to get gelocation
    const getLocation = () => {

        let location = '0001';
        return location;
    }

    // handle getting available bubbles to join
    
    useEffect(
        () => {
            /*
            fetch(`/apiroute/location?${geoLocation}`)
                .then((res) => res.json())
                .then((data) => {
                    setBubbles(data)
                })
                .catch((error) => {
                    router.push('404');
                })
            */
        setBubbles(
            [
                    {
                        id: 1,
                        name: 'bubble1'
                    },
                    {
                        id: 2,
                        name: 'bubble2'
                    },
                    {
                        id: 3,
                        name: 'bubble3'
                    },
                ]
            )
        },
        []
    );


    return (
        <Background>
            
            {/*<Navbar />*/}

            <Head>
                <title>Bubble - Start Streaming</title>
                <meta name="description" content="Where live action meets livestream" />
                <link rel="icon" href="/logo.png" />
            </Head>

            <div className={styles.container}>

                <Shadow>
                    <Button 
                        text="Create stream"
                        wide={true}
                        onClick={() => router.push('/start-straming/create-bubble')}
                    />
                </Shadow>

                <Select 
                    label="Available bubbles"
                    options={bubbles}
                    onChange={(e) => setCurrentBubble(e.target.value)}
                />

                <Shadow>
                    <Button 
                        text="Join Stream"
                        wide={true}
                        onClick={() => router.push(`/start-streaming/join-bubble/${currentBubble}`)}
                    />
                </Shadow>

                <Button 
                    onClick={() => router.back()}
                    text="Go back"
                />

            </div>
        </Background>
    )

}

export default startStream;

export const getServerSideProps = async (context) => {



    if (!isMobile)
    {
        return {
            props: {
                
            },
        }
    }
    else
    {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        }
    }
}
