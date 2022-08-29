import Head from 'next/head'
import { Background } from '../../components/background'
import styles from '../../styles/HostedEvents.module.css'
import { Navbar } from '../../components/navbar'
import { Footer } from '../../components/footer'
import {SquareBubble, TallBubble, WideBubble} from '../../components/bubbles'
import { FullBubble, MiniWideBubble } from '../../components/HostedEventBubble'
import { HomeTopContainer } from '../../containers/bubbleContainer'
import { HostedEventsContainer } from '../../containers/eventsContainer'
import { ExploreContentContainer } from '../../containers/exploreContentContainer'
import Link from 'next/link'
import { BubbleBtn } from '../../objects/bubbleBtn'
import { getCookie } from "cookies-next";
import { isAuth, getUsername } from "../../logic/auth";

export default function HostedEvents(loggedIn, user) {
    return (
      <Background>
        <Navbar loggedIn={loggedIn} />

        <Head>
          <title>Hosted Events | Bubble</title>
          <meta name="description" content="Watch upcoming Events" />
          <link rel="icon" href="/logo.png" />
        </Head>

        <div className={styles.container}>
          <HostedEventsContainer title={`Hosted Event by Phoebe Bridgers`}>
            <FullBubble
              text="Phoebe Bridgers"
              venue="Cardiff Motorpoint Arena"
              date="26th July 2022"
              time="19:00 - 21:00"
              image="https://res.cloudinary.com/ddrwijehn/image/upload/v1661780741/Bubble/image_1_2_sbt0at.png"
              colour="var(--accent-red)"
              url="watchStreams"
            />
          </HostedEventsContainer>

          <ExploreContentContainer topRow={true} title="Event streams">
        <WideBubble
          text="Pheobe Bridgers Live"
          subText="MusicLover"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1661781700/Bubble/maxresdefault_wsoloj.jpg"
          url="categories/1"
          colour="var(--blue)"
        />

        <WideBubble
          text="Pheobe Bridgers!"
          subText="IndieKid"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1661781706/Bubble/Phoebe-Bridgers-getty_nmfhhg.jpg"
          url="categories/2"
          colour="var(--green)"
        />

        <WideBubble
          text="Phoebe Bridgers Live"
          subText="Simon34"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1661781709/Bubble/A7307604_qt0qyd.webp"
          url="categories/3"
          colour="var(--teal)"
        />

        <WideBubble
          text="Live Music!"
          subText="Sally"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1661781712/Bubble/Phoebe-Bridgers-SNL-2021_pkzomj.webp"
          url="categories/1"
          colour="var(--indigo)"
        />
      </ExploreContentContainer>
        </div>
        <Footer loggedInJoinBubble={true} />
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