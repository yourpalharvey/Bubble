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
      <Navbar />
      
    
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
          />
          
          <SquareBubble
              text="testing 2" 
              date="July 28th"
              image="/phoebeBridges.png"
              url="joinbubble/2"
          />
          
          <SquareBubble
              text="testing 3" 
              date="July 28th"
              image="/phoebeBridges.png"
              url="joinbubble/3"
          />  
        </HomeTopContainer>

        <HomeTopContainer title="Top categories" seeMore="See more categories">

          <TallBubble
              text="testing" 
              date="July 28th"
              image="/phoebeBridges.png"
              url="categories/1"
          />
          
          <TallBubble
              text="testing 2" 
              date="July 28th"
              image="/phoebeBridges.png"
              url="categories/2"
          />
          
          <TallBubble
              text="testing 3" 
              date="July 28th"
              image="/phoebeBridges.png"
              url="categories/3"
          />  

          <TallBubble
              text="testing" 
              date="July 28th"
              image="/phoebeBridges.png"
              url="categories/1"
          />
          
          <TallBubble
              text="testing 2" 
              date="July 28th"
              image="/phoebeBridges.png"
              url="categories/2"
          />
          
          <TallBubble
              text="testing 3" 
              date="July 28th"
              image="/phoebeBridges.png"
              url="categories/3"
          />    

        </HomeTopContainer>

        <HomeTopContainer title="Top streams" seeMore="See more streams">
          <WideBubble
              text="testing" 
              date="July 28th"
              image="/phoebeBridges.png"
              url="categories/1"
          />
          
          <WideBubble
              text="testing 2" 
              date="July 28th"
              image="/phoebeBridges.png"
              url="categories/2"
          />
          
          <WideBubble
              text="testing 3" 
              date="July 28th"
              image="/phoebeBridges.png"
              url="categories/3"
          />  

          <WideBubble
              text="testing" 
              date="July 28th"
              image="/phoebeBridges.png"
              url="categories/1"
          />
        </HomeTopContainer>
      </div>
      <Footer LoggedIn={false} />
    </Background>
    
  )
}


