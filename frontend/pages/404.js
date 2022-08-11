import styles from "../styles/404.module.css";

import Image from "next/image";
import { useRouter } from "next/router";

import messyPic from "../public/messy.png";
import { Background } from "../components/background";

import { ButtonBootstrap } from "../objects/buttonBootstrap";

const fourOhFour = (props) => {
  // handle going back to home page
  const router = useRouter();

  return (
    <div>
      <Background>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image src={messyPic} alt="" />
          </div>
          <h1 className={styles.title}>404 - Page Not Found</h1>
          <p className={styles.message}>
            Sorry, but the page you are looking for might have been removed, had
            it’s name changed or is tempory unavalible.
          </p>

          <ButtonBootstrap
            primaryWide={true}
            text="Go Home"
            onClick={() => router.push("/")}
          ></ButtonBootstrap>
        </div>
      </Background>
    </div>
  );
};

export default fourOhFour;
