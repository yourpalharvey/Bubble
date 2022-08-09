import Head from "next/head"
import { Background } from "../../components/background"
import { Navbar } from "../../components/navbar"
import { ProgressBar } from "../../components/progressBar"
import styles from '../../styles/StartStreaming.module.css'

const createBubble = () => {

    return (
        <Background>
            <Navbar />

            <Head>
                <title>Bubble - Create Bubble</title>
                <meta name="description" content="Where live action meets livestream" />
                <link rel="icon" href="/logo.png" />
            </Head>

            <div className={styles.container}>

                <ProgressBar progress='10' />

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