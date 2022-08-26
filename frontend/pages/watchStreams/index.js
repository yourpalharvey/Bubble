import Head from 'next/head'
import { Background } from '../../components/background'
import { Navbar } from '../../components/navbar'
import { Footer } from '../../components/footer'
import styles from '../../styles/StreamWatch.module.css'
import VideoJs from 'video.js';
import ResponsivePlayer from '../../components/videoPlayer';
import { FullBubble, MiniWideBubble } from '../../components/HostedEventBubble'
import { HostedEventsContainer } from '../../containers/eventsContainer'
import { VideoStreamContainer } from '../../containers/streamsContainer';
import { CurrentVideoBubble, SameEventVideoBubble } from '../../components/streamBubble';

export default function StreamWatch ({loggedIn, user}) {

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

        {/* <HostedEventsContainer title="Upcoming events"> */}
        <div className={styles.streamPageContainer}>
          <div className={styles.videoPlayer}>
            <ResponsivePlayer />
          </div>

          {/* </HostedEventsContainer>   */}

          <div className={styles.eventInfoBubble}>
            <CurrentVideoBubble 
                  text="Phoebe Bridgers Live"
                  username="StreamerDreamer"
                  image="/phoebeBridges.png"
            />
          </div>
          {/* <hr></hr> */}
          <div className={styles.videoInfoBubble}>
            <SameEventVideoBubble 
              heading="Bubble Phoebe Bridgers"
              streamScore="480 Streams"
              image="/phoebeBridges.png"
            />
          </div>
          <br></br>
          <VideoStreamContainer title={`Other streams from the the user`}>
            <MiniWideBubble
              eventName="testing"
              userName="July 28th"
              image="/phoebeStream.png"
              url="categories/1"
            />

            <MiniWideBubble
              text="testing 2"
              date="July 28th"
              image="/phoebeStream.png"
              url="categories/2"
            />

            <MiniWideBubble
              text="testing 3"
              date="July 28th"
              image="/phoebeStream.png"
              url="categories/3"
            />

            <MiniWideBubble
              text="testing"
              date="July 28th"
              image="/phoebeStream.png"
              url="categories/1"
            />
          </VideoStreamContainer>
        </div>

        <Footer loggedInJoinBubble={true}/>
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



  // return props
  return {
    props: {
        loggedIn: valid,
        user: username,
    }
  } 

}