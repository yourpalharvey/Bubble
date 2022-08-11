import styles from "./Navbar.module.css";
import { BrowserView, MobileOnlyView, MobileView } from "react-device-detect";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { TextInput } from "../../objects/textInput";
import { ButtonCustom } from "../../objects/buttonCustom";
import { Shadow } from "../../objects/shadow";
import SettingsIcon from "../../objects/settingsIcon";
import Button from "react-bootstrap/Button";
import { ButtonBootstrap } from "../../objects/buttonBootstrap";

import React, { useState } from "react";
import { LogInModal } from "../logInModal";

export const Navbar = () => {
  const router = useRouter();

  const [showLogin, setShowLogin] = useState(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

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
            <ButtonBootstrap
              primaryLarge={true}
              text="Log in"
              onClick={handleShowLogin}
            ></ButtonBootstrap>
          </div>

          <div className={styles.browserRHSContainer}>
            <ButtonBootstrap
              secondaryLarge={true}
              text="Sign up"
              onClick={handleShowLogin}
            ></ButtonBootstrap>
          </div>

          <Link href="/settings">
            <div className={styles.browserRHSContainer}>
              <SettingsIcon />
            </div>
          </Link>
        </nav>
      </BrowserView>

      <LogInModal
        showLogin={showLogin}
        handleShowLogin={handleShowLogin}
        handleCloseLogin={handleCloseLogin}
      />
    </>
  );
};
