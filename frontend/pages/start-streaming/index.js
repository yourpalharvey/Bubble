import Head from 'next/head';
import { MobileView, isMobile } from 'react-device-detect'
import { Background } from '../../components/background';
import { Navbar } from '../../components/navbar';
import { ButtonCustom } from "../../objects/buttonCustom";
import styles from '../../styles/StartStreaming.module.css'
import {useRouter} from 'next/router'
import { Shadow } from '../../objects/shadow';
import { useEffect, useState } from 'react';
import { Select } from '../../components/select';
import { ButtonBootstrap } from "../../objects/buttonBootstrap";
import { getRequest } from '../../logic/requests';
import { getCookie } from 'cookies-next';
import { isAuth, getId } from "../../logic/auth";
import { URLBASE } from '../../logic';

const startStream = ({userId, bubbles}) => {
  // handle going back
  const router = useRouter();

  // state for available bubbles
  const [bubble, setBubble] = useState([]);
  const [currentBubble, setCurrentBubble] = useState();

  // set data as dropdown option
  const mapDataToOptions = () => {
    let output = [];
    bubbles.map(bub => {
      output.push({"id": bub.id, "name": bub.title});
    })
    return output;
  }
  useEffect(() => {
    setBubble(mapDataToOptions);
  }, []);

  return (
    <Background>
      <Navbar  loggedIn={userId ? true : false}/>

      <Head>
        <title>Bubble - Start Streaming</title>
        <meta name="description" content="Where live action meets livestream" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className={styles.containerColumm}>
        <div className={styles.startStreamingButton}>
          <ButtonBootstrap
            text="Create stream"
            primaryWide={true}
            onClick={() => router.push("/start-streaming/create-bubble")}
          />
        </div>

        <Select
          label="Available bubbles"
          options={bubble}
          onChange={(e) => setCurrentBubble(e.target.value)}
        />

        <div className={styles.startStreamingButton}>
          <a
            target="_blank"
            href={`/start-streaming/join-bubble/${currentBubble}`}
            rel="noopener noreferrer"
          >
            <ButtonBootstrap text="Join Stream" primaryWide={true} />
          </a>
        </div>

        <div className={styles.startStreamingButton}>
          <ButtonBootstrap
            onClick={() => router.back()}
            text="Go back"
            primaryWide={true}
          />
        </div>
      </div>
    </Background>
  );
};

export default startStream;

export const getServerSideProps = async (ctx) => {

  // get bubbles
  let bubbles = await getRequest(`${URLBASE}/bubble`);


  // get the req and res objects from context
  const {req, res} = ctx;

  // get the token cookie
  const token = getCookie("token", {req, res});

  // if the token exists, return wheteher it is valid, otherwise set it as false
  const valid = token != null ? await isAuth(token): false;
  const id = token!= null ? await getId(token) : null;


  if (valid)
  {
      return {
          props: {
            userId: id,
            bubbles,
          },
      }
  }
  else
  {
      return {
          redirect: {
              destination: "/",
              permanent: false,
          },
      }
  }
}

