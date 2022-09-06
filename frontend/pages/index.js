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
            text="Phoebe Bridgers"
            date="Live Now"
            image="https://res.cloudinary.com/ddrwijehn/image/upload/v1661780741/Bubble/image_1_2_sbt0at.png"
            url="/hosted"
            colour="var(--accent-red)"
          />

          <SquareBubble
            text="Arsnel vs Man City"
            date="August 10th"
            image="https://res.cloudinary.com/ddrwijehn/image/upload/v1661780796/Bubble/image_2_mqnyef.png"
            url="joinbubble/2"
            colour="var(--green)"
          />

          <SquareBubble
            text="Matilda the Musical"
            date="August 11th"
            image="https://res.cloudinary.com/ddrwijehn/image/upload/v1661780802/Bubble/image_3_youyan.png"
            url="joinbubble/3"
            colour="var(--orange)"
          />
        </HomeTopContainer>

        <HomeTopContainer title="Top categories" seeMore="See more categories">
        <TallBubble
          text="Pop"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660828077/Bubble/TaylorSwift_xoyk4t.png"
          url="categories/1"
          colour="var(--accent-red)"
        />

        <TallBubble
          text="Football"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/ManU_poggqm.png"
          url="categories/2"
          colour="var(--teal)"
        />

        <TallBubble
          text="Hip-Hop"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836848/Bubble/Kendrick_rzjge0.png"
          url="categories/3"
          colour="var(--indigo)"
        />

        <TallBubble
          text="Skateboard"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/Skateboard_l6mtul.png"
          url="categories/1"
          colour="var(--orange)"
        />

        <TallBubble
          text="Musicals"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/musical_eio2tb.png"
          url="categories/2"
          colour="var(--blue)"
        />

        <TallBubble
          text="Art Galleries"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836848/Bubble/Gallery_waibqd.png"
          url="categories/3"
          colour="var(--green)"
        />
        </HomeTopContainer>

        <HomeTopContainer title="Top streams" seeMore="See more streams">
        <WideBubble
          text="Feet Foxes!"
          subText="FoxesFan123"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/FleetFoxes_gbtgck.png"
          url="categories/1"
          colour="var(--blue)"
        />

        <WideBubble
          text="F1 - Grand Prix"
          subText="MotorKid"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/F1_nkmcwj.png"
          url="categories/2"
          colour="var(--green)"
        />

        <WideBubble
          text="Tate Modern"
          subText="ArtyMarty"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/Tate_fyowjr.png"
          url="categories/3"
          colour="var(--teal)"
        />

        <WideBubble
          text="Cardiff Circus"
          subText="Jane2986"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836848/Bubble/Circus_gl01gt.png"
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