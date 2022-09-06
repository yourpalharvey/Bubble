import { Background } from "../components/background";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { getCookie } from 'cookies-next';
import { getUsername, isAuth } from '../logic/auth';
import styles from "../styles/Privacy.module.css";

const Accessibility = ({loggedIn}) => {

    return (
        <>
        <Background>
            <Navbar loggedIn={loggedIn}/>
            
            <div className={styles.container}>

                <h1 className={styles.head}>
                    Bubble App Accessability Statement
                </h1>
                <p className={styles.body}>
                You’re already one of us.

                As children, some of our earliest memories came from the playground. When we played together, we made cherished memories. That’s what we want Bubble to be: A place where anyone can play and make memories together.
                    <br />
                    <br />
                If you enjoy using the Bubble experience, or have trouble with any part of it, please let us know!.
                    <br />
                    <br />
                    Because Bubble provides the playground, but does not control the play taking place, we cannot create accurate audio descriptions for the millions of hours of video content streamed on our platform daily.
                </p>

                <h1 className={styles.head}>
                    Photosensitive Seizure Warning
                </h1>
                <p className={styles.body}>Bubble allows you to watch streams of video game play and other types of visual content. A very small percentage of individuals may experience epileptic seizures when exposed to certain visual images, including light patterns or flashing lights that may appear in video games or other visual content. Exposure to certain patterns or backgrounds on a computer screen, or while watching video games or viewing chat, may induce an epileptic seizure in these individuals. Certain conditions may induce previously undetected epileptic symptoms even in persons who have no history of prior seizures or epilepsy. If you, or anyone in your family, have an epileptic condition, consult your physician prior to watching content on Bubble.
                    <br />
                    <br />
                    If you experience any of the following symptoms while watching – dizziness, altered vision, eye or muscle twitches, loss of awareness, disorientation, any involuntary movement, or convulsions – discontinue use IMMEDIATELY and consult your physician before resuming use of Bubble.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

            </div>

            <Footer loggedIn={loggedIn}/>
        </Background>
        </>
    )
}

export default Accessibility;

export const getServerSideProps = async (ctx) => {

    // get the req and res objects from context
    const {req, res} = ctx;
  
    // get the token cookie
    const token = getCookie("token", {req, res});
  
    // if the token exists, return wheteher it is valid, otherwise set it as false
    const valid = token != null ? await isAuth(token): false;
    // const username = token!= null ? await getUsername(token) : null;
  
  
  
    // return props
    return {
      props: {
          loggedIn: valid,
          // user: username,
      }
    } 
  
  }