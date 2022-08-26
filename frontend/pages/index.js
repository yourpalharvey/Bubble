import Head from 'next/head'
import { Background } from '../components/background'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/navbar'
import {HomeTopContainer} from "../containers/bubbleContainer"
import {SquareBubble, TallBubble, WideBubble} from '../components/bubbles'
import { Footer } from '../components/footer'
import { getCookie } from 'cookies-next';
import { getUsername, isAuth } from '../logic/auth';


export default function Home({loggedIn, user}) {


  return (
    <Background>
      <Navbar loggedIn={loggedIn} />

      <Head>
        <title>Bubble</title>
        <meta name="description" content="Where live action meets livestream" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className={styles.container}>
        <HomeTopContainer title="Upcoming Events" seeMore="See more events">
          <SquareBubble
            text={user || "test"}
            date="July 28th"
            image="/phoebeBridges.png"
            url="joinbubble/1"
            colour="var(--accent-red)"
          />

          <SquareBubble
            text="testing 2"
            date="July 28th"
            image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/Rock_qbeh2v.png"
            url="joinbubble/2"
            colour="var(--green)"
          />

          <SquareBubble
            text="testing 3"
            date="July 28th"
            image="/phoebeBridges.png"
            url="joinbubble/3"
            colour="var(--orange)"
          />
        </HomeTopContainer>

        <HomeTopContainer title="Top categories" seeMore="See more categories">
          <TallBubble
            text="testing"
            date="July 28th"
            image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660828077/Bubble/TaylorSwift_xoyk4t.png"
            url="categories/1"
            colour="var(--accent-red)"
          />

          <TallBubble
            text="testing 2"
            date="July 28th"
            image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/Paintball_fc4abo.png"
            url="categories/2"
            colour="var(--teal)"
          />

          <TallBubble
            text="testing 3"
            date="July 28th"
            image="/phoebeBridges.png"
            url="categories/3"
            colour="var(--indigo)"
          />

          <TallBubble
            text="testing"
            date="July 28th"
            image="/phoebeBridges.png"
            url="categories/1"
            colour="var(--orange)"
          />

          <TallBubble
            text="testing 2"
            date="July 28th"
            image="/phoebeBridges.png"
            url="categories/2"
            colour="var(--blue)"
          />

          <TallBubble
            text="testing 3"
            date="July 28th"
            image="/phoebeBridges.png"
            url="categories/3"
            colour="var(--green)"
          />
        </HomeTopContainer>

        <HomeTopContainer title="Top streams" seeMore="See more streams">
          <WideBubble
            text="testing"
            date="July 28th"
            image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/Taylor_fykweg.png"
            url="categories/1"
            colour="var(--blue)"
          />

          <WideBubble
            text="testing 2"
            date="July 28th"
            image="/phoebeBridges.png"
            url="categories/2"
            colour="var(--green)"
          />

          <WideBubble
            text="testing 3"
            date="July 28th"
            image="/phoebeBridges.png"
            url="categories/3"
            colour="var(--teal)"
          />

          <WideBubble
            text="testing"
            date="July 28th"
            image="/phoebeBridges.png"
            url="categories/1"
            colour="var(--indigo)"
          />
        </HomeTopContainer>
      </div>
      <Footer loggedIn={loggedIn} />
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