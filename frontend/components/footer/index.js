import styles from "./footer.module.css";
import { BrowserView, MobileOnlyView, MobileView } from "react-device-detect";
import Image from "next/image";
import Link from "next/link";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { ButtonCustom } from "../../objects/buttonCustom";
import { Shadow } from "../../objects/shadow";

import React, { useState } from "react";
import { LogInModal } from "../logInModal";

export const Footer = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

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
      <Link href="/start-streaming">
        <Button variant="light" size="lg" className={styles.buttonStyling}>
          Go Live
        </Button>
      </Link>
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
      <Button
        variant="light"
        size="lg"
        className={styles.buttonStyling}
        onClick={handleShow}
      >
        Log in
      </Button>
    );
    footerButtonTwo = (
      <Button
        variant="light"
        size="lg"
        className={styles.buttonStyling}
        onClick={handleShow}
      >
        Sign up
      </Button>
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
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
      />
    </>
  );
};
