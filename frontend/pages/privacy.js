import { Background } from "../components/background";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { getCookie } from 'cookies-next';
import { getUsername, isAuth } from '../logic/auth';
import styles from "../styles/Privacy.module.css";

const Privacy = ({loggedIn}) => {

    return (
        <>
        <Background>
            <Navbar loggedIn={loggedIn}/>
            
            <div className={styles.container}>

                <h1 className={styles.head}>
                    Privacy Policy
                </h1>
                <p className={styles.body}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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

export default Privacy;

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