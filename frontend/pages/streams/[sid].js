import { Background } from "../../components/background"
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { getCookie } from "cookies-next";
import { isAuth } from "../../logic/auth";
import Head from "next/head";
import { getStreams } from "../../logic/video";
import styles from "../../styles/Streams.module.css";
import { HomeTopContainer } from "../../containers/bubbleContainer";
import { getBubbleTitle } from "../../logic/bubble";
import { WideBubble } from "../../components/bubbles";

const streams = ({loggedIn, streams, title}) => {


    // randomise colours
    let colours = ['--accent-red', '--teal', '--indigo', '--orange', '--blue', '--green'];
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
    </Background>)
}

export default streams;



export const getServerSideProps = async (ctx) => {

    // get the req and res objects from context
    const {req, res} = ctx;
    const {sid} = ctx.query;
  
    // get the token cookie
    const token = getCookie("token", {req, res});
  
    // if the token exists, return wheteher it is valid, otherwise set it as false
    const valid = token != null ? await isAuth(token): false;
    
    // get streams of the bubble
    const streams = await getStreams(sid);
    
    // get title of bubble
    const title = await getBubbleTitle(sid);
  
  
  
    // return props
    return {
      props: {
          loggedIn: valid,
          streams: streams,
          title: title
      }
    } 
  
  }