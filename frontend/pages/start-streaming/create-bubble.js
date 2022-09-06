import Head from "next/head";
import { useState } from "react";
import { Background } from "../../components/background";
import { Navbar } from "../../components/navbar";
import { CreateBubble1, CreateBubble2 } from "../../containers/createBubble";
import styles from "../../styles/StartStreaming.module.css";
import { getCookie } from "cookies-next";
import { isAuth, getUsername } from "../../logic/auth";
import { URLBASE } from "../../logic";
import { getRequest } from "../../logic/requests";

const createBubble = ({loggedIn, user, catData, tagData}) => {
  const [progress, setProgress] = useState(5);
  const [bubbleId, setBubbleId] = useState();

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
          <CreateBubble1 progress={progress} setProgress={setProgress} setBubbleId={setBubbleId} data={catData}/>
        ) : (
          <CreateBubble2 progress={progress} setProgress={setProgress} data={tagData} bubbleId={bubbleId}/>
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

  // get category data from database
  const response = await getRequest(`${URLBASE}/category`);

  // get tags
  const tags = await getRequest(`${URLBASE}/tags`);
  

  // get location


  // return props
  return {
    props: {
        loggedIn: valid,
        user: username,
        catData: response,
        tagData: tags
    }
  } 

}
