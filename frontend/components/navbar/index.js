import styles from "./Navbar.module.css";
import { BrowserView, MobileOnlyView, MobileView } from "react-device-detect";
import Image from "next/image";
import Link from "next/link";

import { TextInput } from "../../objects/textInput";
import { Button } from "../../objects/button";
import { Shadow } from "../../objects/shadow";
import SettingsIcon from "../../objects/settingsIcon";

import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

export const Navbar = () => {
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

          <Link href="/login">
            <div className={styles.browserRHSContainer}>
              <Shadow>
                <Button text="Log In" colour={true} />
              </Shadow>
            </div>
          </Link>

          <Link href="/signup">
            <div className={styles.browserRHSContainer}>
              <Shadow>
                <Button text="Sign Up" colour={false} />
              </Shadow>
            </div>
          </Link>

          {/* <Link href="/settings">
                        <div className={styles.browserRHSContainer}>
                            <SettingsIcon />
                        </div>
                    </Link> */}

          {/* <Link href="/settings" className={styles.settingsIcon}> */}
          <div className={styles.browserRHSContainer}>
            <NavItems>
              <NavIcons icon={<SettingsIcon />}>
                {/* Dropdown */}
                <DropdownMenu>

                </DropdownMenu>
              </NavIcons>
            </NavItems>
          </div>
          {/* </Link> */}
        </nav>
      </BrowserView>
    </>
  );
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

  function DropdownItem(props) {
    return (
      <a href="#" className={styles.menuItem}>
        <span className={styles.iconButton}>{props.leftIcon}</span>

        {props.children}

        <span className={styles.iconRight}>{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className={styles.dropdown}>
        <DropdownItem>
            <Link href="/explore">
                My Profile
            </Link>
        </DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Privacy Policy</DropdownItem>
      <DropdownItem>Log Out</DropdownItem>
      {/* <DropdownItem 
                leftIcon={<CogIcon />}
                rightIcon={<ChevronIcon />}>

            </DropdownItem> */}
    </div>
  );
}
