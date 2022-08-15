import styles from "./Navbar.module.css";
import { BrowserView, MobileOnlyView, MobileView } from "react-device-detect";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { TextInput } from "../../objects/textInput";
import SettingsIcon from "../../objects/settingsIcon";
import { ButtonBootstrap } from "../../objects/buttonBootstrap";

import React, { useState } from "react";
import { LogInModal } from "../logInModal";
import { SignUpModal } from "../signUpModal";

export const Navbar = () => {
  const router = useRouter();

  const [showLogin, setShowLogin] = useState(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  const [showSignUp, setShowSignUp] = useState(false);
  const handleShowSignUp = () => setShowSignUp(true);
  const handleCloseSignUp = () => setShowSignUp(false);

  const [search, setSearch] = useState("");

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <div>
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
            <TextInput
              value={search}
              onChange={setSearch}
              clear={clearSearch}
              name="search"
              search={true}
            />
          </div>

          <div className={styles.browserRHSContainer}>
            <ButtonBootstrap
              primaryLarge={true}
              text="Log In"
              onClick={handleShowLogin}
            ></ButtonBootstrap>
          </div>

          <div className={styles.browserRHSContainer}>
            <ButtonBootstrap
              secondaryLarge={true}
              text="Sign Up"
              onClick={handleShowSignUp}
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
      <SignUpModal
        showSignUp={showSignUp}
        handleShowSignUp={handleShowSignUp}
        handleCloseSignUp={handleCloseSignUp}
      />
    </div>
  );
};
