import styles from "../../styles/Explore.module.css";
import Head from "next/head";
import { Background } from "../../components/background";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";

export default function Explore() {
  return (
    <Background>
      <Head>
        <title>Hosted Events | Bubble</title>
        <meta name="description" content="Watch upcoming Events" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Navbar loggedIn={false} />
      <div className={styles.container}>
        <h1>Exlore page</h1>
      </div>

      <Footer loggedIn={false} />
    </Background>
  );
}
