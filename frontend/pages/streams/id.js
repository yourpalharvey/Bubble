import { Background } from "../../components/background"
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import Head from "next/head";
import styles from "../../styles/Streams.module.css";
import { HomeTopContainer } from "../../containers/bubbleContainer";
import { WideBubble } from "../../components/bubbles";

const streams = ({loggedIn, streams, title}) => {


    // randomise colours
    var colours = ['--red', '--yellow', '--blue', '--green'];
    const randomise = max => {
        return Math.floor(Math.random() * max);
    }
    const streamData = streams.map(
        tag => <WideBubble 
            key={tag.id}
            image={tag.image}
            url={`start-streaming/watch/${tag.signalId}`}
            colour={`var(${colours[randomise(colours.length)]})`}
        />
    )


    return (
    <Background>
        <Navbar loggedIn={loggedIn} />

        <Head>
            <title>Streams | Bubble</title>
            <meta name="description" content="Where live action meets livestream" />
            <link rel="icon" href="/logo.png" />
        </Head>

        <div className={styles.container}>
            <HomeTopContainer title ={title}>
                {streamData}
            </HomeTopContainer>

        </div>


        <Footer loggedIn={loggedIn} />
    </Backgroun
