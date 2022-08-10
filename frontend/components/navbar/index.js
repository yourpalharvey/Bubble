import styles from "./Navbar.module.css";
import { BrowserView, MobileOnlyView, MobileView } from "react-device-detect";
import Image from "next/image";
import Link from "next/link";

import { TextInput } from "../../objects/textInput";
import { ButtonCustom } from "../../objects/buttonCustom";
import { Shadow } from "../../objects/shadow";
import SettingsIcon from "../../objects/settingsIcon";

import React, { useState } from "react";
import { LogInModal } from "../logInModal";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <BrowserView>
        <nav className={styles.browserContainer}>
          <Link href="/">
            <div className={styles.browserLHSContainer}>
              <Image src="/logo.png" alt="logo" height="50%" width="50%" />
            </div>
          </Link>

          <Link href="/explore">
            <div className={styles.browserLHSContainer}>explore</div>
          </Link>

          <div className={styles.browserSearchContainer}>
            <TextInput search={true} />
          </div>

          <div className={styles.browserRHSContainer}>
            <Shadow>
              <ButtonCustom text="Log in" colour={true} onClick={handleShow} />
            </Shadow>
          </div>

          <Link href="/settings">
            <div className={styles.browserRHSContainer}>
              <SettingsIcon />
            </div>
          </Link>
        </nav>
      </BrowserView>

      <LogInModal
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
      />
    </>
  );
};
