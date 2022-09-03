import Head from 'next/head';
import { useRouter } from 'next/router';
import { Background } from '../../components/background';
import { Navbar } from '../../components/navbar';
import { Footer } from '../../components/footer'

import { URLBASE } from '../../logic';
import { getCookie } from 'cookies-next';
import { isAuth } from '../../logic/auth';
import { getRequest } from '../../logic/requests';
import styles from "../../styles/Categories.module.css";
import { ExploreBubbles } from '../../components/exploreBubbles';
import { getBubblebyTagId, getTagTitle } from '../../logic/bubble';

const Categories = ({loggedIn, bubbles, title}) => {

    const router = useRouter()
    const {tid} = router.query;

    // get bubbles by id


    return (
        <Background>

            <Head>
                <title>Bubble - Categories</title>
                <meta name="description" content="Where live action meets livestream" />
                <link rel="icon" href="/logo.png" />
            </Head>

            <Navbar loggedIn={loggedIn} />

            <div className={styles.container}>
                <ExploreBubbles title={title} data={bubbles} />


            </div>

            <Footer loggedIn={loggedIn} />

        </Background>
    )
}

export default Categories;

export const getServerSideProps = async (ctx) => {

    // get the req and res objects from context
  const {req, res} = ctx;
  const {tid} = ctx.query;

  // get the token cookie
  const token = getCookie("token", {req, res});

  // if the token exists, return wheteher it is valid, otherwise set it as false
  const valid = token != null ? await isAuth(token): false;

  // get bubbles
  const bubbleData = await getBubblebyTagId(tid);

  // get title
  const title = await getTagTitle(tid);



  // return props
  return {
    props: {
        loggedIn: valid,
        bubbles: bubbleData,
        title: title
    }
  } 
}