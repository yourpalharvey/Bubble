import styles from "./Navbar.module.css";
import { BrowserView, MobileOnlyView, MobileView } from "react-device-detect";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Shadow } from '../../objects/shadow'
import { ButtonCustom } from '../../objects/buttonCustom'
import { TextInput } from "../../objects/textInput";
import SettingsIcon from "../../objects/settingsIcon";
import { ButtonBootstrap } from "../../objects/buttonBootstrap";
import { LogInModal } from "../logInModal";
import { SignUpModal } from "../signUpModal";

import Dropdown from 'react-bootstrap/Dropdown';

import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

export const Navbar = (props) => {
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

  if (props.loggedIn) {
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
                text="Go Live"
                onClick={() => router.push("/start-streaming")}
              ></ButtonBootstrap>
            </div>

            <div className={styles.browserRHSContainer}>
            <NavItems>
              <NavIcons icon={<SettingsIcon />}>
                {/* Dropdown */}
                <DropdownMenu>

                </DropdownMenu>
              </NavIcons>
            </NavItems>
          </div>
          </nav>
        </BrowserView>
      </div>
    );
  } else {
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

            <div className={styles.browserRHSContainer}>
            <NavItems>
              <NavIcons icon={<SettingsIcon />}>
                {/* Dropdown */}
                <DropdownMenu>

                </DropdownMenu>
              </NavIcons>
            </NavItems>
          </div>
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
  }
};


function NavItems(props) {
  return <ul className={styles.navbarItems}> {props.children} </ul>;
}

function NavIcons(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className={"nav-icons"}>
      <a href="#" className={styles.iconButton} onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu(props) {
  const [] = useState();

  function DropDownHeader(props) {
    return <h3 className={styles.dropdownSectionHead}>{props.header}</h3>;
  }

  function DropdownItem(props) {
    return (
      <Link href={props.url}>
      <a className={styles.menuItem}>
        <span className={styles.iconButton}>{props.leftIcon}</span>

        {props.children}

        <span className={styles.iconRight}>{props.rightIcon}</span>
      </a>
      </Link>
    );
  }

  return (
    <div className={styles.dropdown}>
      <DropdownItem url="/explore">
        {/* <Link href="/explore" className={"link"}> */}
          My Profile
        {/* </Link> */}
      </DropdownItem>
      <DropdownItem url="/myaccount">
          Settings
      </DropdownItem>
      <hr></hr>
      <DropdownItem url="/privacy">
          Privacy Policy
      </DropdownItem>
      <hr></hr>
      <DropdownItem url="logout">Log Out</DropdownItem>
    </div>
  );
}
