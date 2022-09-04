import styles from "./Footer.module.css";
import { BrowserView, MobileOnlyView, MobileView } from "react-device-detect";
import Image from "next/image";
import { useRouter } from "next/router";

import React, { useState } from "react";
import { ButtonBootstrap } from "../../objects/buttonBootstrap";
import { LogInModal } from "../logInModal";
import { SignUpModal } from "../signUpModal";

export const Footer = (props) => {
  const router = useRouter();

  const [showLogin, setShowLogin] = useState(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  const [showSignUp, setShowSignUp] = useState(false);
  const handleShowSignUp = () => setShowSignUp(true);
  const handleCloseSignUp = () => setShowSignUp(false);

  const [currentBubble, setCurrentBubble] = useState();

  let footerImageInfo;
  let footerTitleText;
  let footerMessageText;
  let footerButtonInfo;
  let footerButtonTwo;

  // If user is not logged in
  if (props.loggedIn) {
    footerImageInfo = (
      <Image src="/footerLoggedInPic.png" alt="" height="70px" width="88px" />
    );
    footerTitleText = (
      <h2 className={styles.footerTitle}>Watch, Stream, Enjoy!</h2>
    );
    footerMessageText = (
      <p className={styles.footerMessage}>
        Explore awesome events, create a new bubble, or join someone else’s.
      </p>
    );
    footerButtonInfo = (
      <ButtonBootstrap
        secondaryLarge={true}
        text="Go Live"
        onClick={() => router.push("/start-streaming")}
      ></ButtonBootstrap>
    );
  } else if (props.loggedInJoinBubble) {
    footerImageInfo = (
      <Image src="/footerLoggedInPic.png" alt="" height="70px" width="88px" />
    );
    footerTitleText = (
      <h2 className={styles.footerTitle}>Are you at this event?</h2>
    );
    footerMessageText = (
      <p className={styles.footerMessage}>
        Join this bubble and start streaming.
      </p>
    );
    footerButtonInfo = (
      <a
        target="_blank"
        href={`/start-streaming/join-bubble/${currentBubble}`}
        rel="noopener noreferrer"
      >
        <ButtonBootstrap
          secondaryLarge={true}
          text="Join Bubble"
        ></ButtonBootstrap>
      </a>
    );
  } else {
    footerImageInfo = (
      <Image src="/footerSignUpPic.png" alt="" height="35px" width="60px" />
    );
    footerTitleText = (
      <h2 className={styles.footerTitle}>Welcome to Bubble!</h2>
    );
    footerMessageText = (
      <p className={styles.footerMessage}>
        Start watching unmissable events and create bubbles for others to join
        you.
      </p>
    );
    footerButtonInfo = (
      <ButtonBootstrap
        secondaryLarge={true}
        text="Log In"
        onClick={handleShowLogin}
      ></ButtonBootstrap>
    );
    footerButtonTwo = (
      <ButtonBootstrap
        secondaryLarge={true}
        text="Sign Up"
        onClick={handleShowSignUp}
        // Handle show for sign up modal!
      ></ButtonBootstrap>
    );
  }

  return (
    <>
      <BrowserView>
        <div className={styles.footerSpacer}></div>
        <footer className={styles.footerBox}>
          <div className={styles.footerContainer}>
            {footerImageInfo}
            {footerTitleText}
            {footerMessageText}
            <div className={styles.footerBtnContainer}>{footerButtonInfo}</div>
            <div className={styles.footerBtnContainerTwo}>
              {footerButtonTwo}
            </div>
          </div>
        </footer>
      </BrowserView>
      <LogInModal
        showLogin={showLogin}
        handleShowLogin={handleShowLogin}
        handleCloseLogin={handleCloseLogin}
      />
      <SignUpModal
        showSignUp={showSignUp}
        handleShowSignUp={handleShowSignUp}
        handleCloseSignUp={handleCloseSignUp}
      />
    </>
  );
};
