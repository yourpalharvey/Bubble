import Head from 'next/head'
import { Background } from '../components/background'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/navbar'
import {HomeTopContainer} from "../containers/bubbleContainer"
import {SquareBubble, TallBubble, WideBubble} from '../components/bubbles'
import { Footer } from '../components/footer'


export default function Home() {
  return (
    <Background>
      <Navbar loggedIn={true} />

      <Head>
        <title>Bubble</title>
        <meta name="description" content="Where live action meets livestream" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className={styles.container}>
        <HomeTopContainer title="Upcoming events" seeMore="See more events">
          <SquareBubble
            text="testing"
            date="July 28th"
            image="/phoebeBridges.png"
            url="joinbubble/1"
            colour="var(--accent-red)"
          />

          <SquareBubble
            text="testing 2"
            date="July 28th"
            image="/phoebeBridges.png"
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
            image="/phoebeBridges.png"
            url="categories/1"
            colour="var(--accent-red)"
          />

          <TallBubble
            text="testing 2"
            date="July 28th"
            image="/phoebeBridges.png"
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
            image="/phoebeBridges.png"
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
      <Footer loggedIn={false} />
    </Background>
  );
}


