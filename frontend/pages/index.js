import Head from 'next/head'
import { Background } from '../components/background'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/navbar'
import {HomeTopContainer} from "../containers/bubbleContainer"
import {SquareBubble, TallBubble, WideBubble} from '../components/bubbles'
import { Footer } from '../components/footer'
import { getCookie } from 'cookies-next';
import { getUsername, isAuth } from '../logic/auth';
import { useEffect, useState } from 'react'
import { getRequest } from '../logic/requests'
import { URLBASE } from '../logic'


export default function Home({loggedIn, user}) {

  const [tags, setTags] = useState([]);

  // randomise colours
  let colours = ['--accent-red', '--teal', '--indigo', '--orange', '--blue', '--green'];
  const randomise = max => {
    return Math.floor(Math.random() * max);
  }

  // get and set first 6 tags
  const categoryData = tags.slice(0,6).map(
    (tag) => <TallBubble
      key={tag.id}
      text={tag.title}
      image={tag.image}
      url={`categories/${tag.id}`}
      colour={`var(${colours[randomise(colours.length)]})`}
    />
  )

  // on page load, get tag data
  useEffect(
    () => {
      const getTags = async () => {
        let tagData = await getRequest(`${URLBASE}/tags`);
        return tagData;
      }

      getTags()
      .then(res => setTags(res));
      // setTags(getTags)
    },
    []
  )



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
            url="hosted"
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
          {categoryData}
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