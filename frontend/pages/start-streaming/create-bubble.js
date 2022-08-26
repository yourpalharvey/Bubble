import Head from "next/head";
import { useState } from "react";
import { Background } from "../../components/background";
import { Navbar } from "../../components/navbar";
import { CreateBubble1, CreateBubble2 } from "../../containers/createBubble";
import styles from "../../styles/StartStreaming.module.css";
import { getCookie } from "cookies-next";
import { isAuth, getUsername } from "../../logic/auth";

const createBubble = ({loggedIn, user}) => {
  const [progress, setProgress] = useState(5);

  return (
    <Background>
      <Navbar loggedIn={loggedIn} />

      <Head>
        <title>Bubble - Create Bubble</title>
        <meta name="description" content="Where live action meets livestream" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className={styles.container}>
        {progress <= 50 ? (
          <CreateBubble1 progress={progress} setProgress={setProgress} />
        ) : (
          <CreateBubble2 progress={progress} setProgress={setProgress} />
        )}
      </div>
    </Background>
  );
};

export default createBubble;


export const getServerSideProps = async (ctx) => {

  // get the req and res objects from context
  const {req, res} = ctx;

  // get the token cookie
  const token = getCookie("token", {req, res});

  // if the token exists, return wheteher it is valid, otherwise set it as false
  const valid = token != null ? await isAuth(token): false;
  const username = token!= null ? await getUsername(token) : null;

  // get user info

  // get location


  // return props
  return {
    props: {
        loggedIn: valid,
        user: username,
    }
  } 

}
