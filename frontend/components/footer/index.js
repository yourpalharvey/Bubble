import styles from "./footer.module.css";
import { BrowserView, MobileOnlyView, MobileView } from "react-device-detect";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { ButtonCustom } from "../../objects/buttonCustom";
import { Shadow } from "../../objects/shadow";

import React, { useState } from "react";
import { LogInModal } from "../logInModal";
import { ButtonBootstrap } from "../../objects/buttonBootstrap";

export const Footer = (props) => {
  const router = useRouter();

  const [showLogin, setShowLogin] = useState(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

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
        text="Log in"
        onClick={handleShowLogin}
      ></ButtonBootstrap>
    );
    footerButtonTwo = (
      <ButtonBootstrap
        secondaryLarge={true}
        text="Sign up"
        onClick={handleShowLogin}
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
    </>
  );
};
