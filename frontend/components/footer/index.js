import styles from "./footer.module.css";
import { BrowserView, MobileOnlyView, MobileView } from "react-device-detect";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../../objects/button";
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
        <div>
          <Shadow>
            <Button text="Go Live!" colour={false} />
          </Shadow>
        </div>
      </Link>
    );
  } else {
    footerImageInfo = (
      <Image src="/footerSignUpPic.png" alt="" height="75px" width="55px" />
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
      <div>
        <Shadow>
          <Button text="Log in" colour={false} onClick={handleShow} />
        </Shadow>
      </div>
    );
  }

  return (
    <>
      <div>
        <BrowserView>
          <div className={styles.footerSpacer}></div>
          <footer className={styles.footerBox}>
            <div className={styles.footerContainer}>
              {footerImageInfo}
              {footerTitleText}
              {footerMessageText}
              <div className={styles.footerBtnContainer}>
                {footerButtonInfo}
              </div>
            </div>
          </footer>
        </BrowserView>
      </div>

      <LogInModal
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
      />
    </>
  );
};
