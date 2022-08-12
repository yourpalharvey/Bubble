import Head from "next/head"
import { useState } from "react"
import { Background } from "../../components/background"
import { Navbar } from "../../components/navbar"
import {CreateBubble1, CreateBubble2} from "../../containers/createBubble"
import styles from '../../styles/StartStreaming.module.css'

const createBubble = () => {

    const [progress, setProgress] = useState(5);

    return (
        <Background>
            <Navbar />

            <Head>
                <title>Bubble - Create Bubble</title>
                <meta name="description" content="Where live action meets livestream" />
                <link rel="icon" href="/logo.png" />
            </Head>

            <div className={styles.container}>
                {  
                    progress <= 50
                ?
                    <CreateBubble1 progress={progress} setProgress={setProgress} />
                :
                    <CreateBubble2 progress={progress} setProgress={setProgress} />
                }


            </div>
        </Background>
    )

}

export default createBubble;

export const getServerSideProps = async () => {

    // get user info

    // get location


    return {
        props: {

        }
    }
}