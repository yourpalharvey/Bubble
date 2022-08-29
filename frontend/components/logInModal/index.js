import styles from "./logInModal.module.css";
import Modal from "react-bootstrap/Modal";

import React, { useEffect, useState } from "react";
import { setCookie } from 'cookies-next';
import { useRouter } from "next/router";

import { InputForms } from "../../objects/inputForms";
import { ButtonBootstrap } from "../../objects/buttonBootstrap";
import { handleLogin } from "../../logic/auth/index";
import { SignUpModal } from "../signUpModal";

export const LogInModal = (props) => {

  const [usernameFull, setUsernameFull] = useState(null);
  const [passwordFull, setPasswordFull] = useState(null);
  const [disabled, setDisabled] =  useState(null);

  const [showSignUp, setShowSignUp] = useState(false);
  const handleShowSignUp = () => setShowSignUp(true);
  const handleCloseSignUp = () => setShowSignUp(false);

  // handling form functions
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);

  const [passwordShown, setPasswordShown] = useState(false);
  
  // router
  const router = useRouter();

  // Password toggle handler, shows password as text.
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  // handle signIn
  const handleSignIn = async () => {
    // handle logIn function
    const res = await handleLogin(username, password);

    if (res === "error")
    {
      // say something went wrong
      setInvalid(true);

    }
    else
    {
      // set expiry
      const expDate = new Date();
      expDate.setMonth(expDate.getMonth() + 1);
  
      const OPTIONS = {
        expires: expDate
      }
  
      // save res
      setCookie("token", res, OPTIONS);

      // close modal
      props.handleCloseLogin();
  
      // refresh
      router.reload(window.location.pathname);
    }
  }

  //check if username if not empty
  useEffect(
    () => {
      setUsernameFull(username);
    },
    [username]
  )

  useEffect(
    () => {
      setPasswordFull(password);
    },
    [password]
  )

    // toggle disabled
  useEffect(
    () => {
      if (username && password)
      {
        setDisabled(false);
      }
      else
      {
        setDisabled(true);
      };
    },
    [username, password]
  )

  return (
    <>
      <Modal show={props.showLogin} onHide={props.handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <InputForms
            passwordShown={passwordShown}
            togglePassword={togglePassword}
            setUsername={setUsername}
            setPassword={setPassword}
            invalid={invalid}
            logInForm={true}
          />
          <a href="/404" className={styles.formLink}>
            Forgotten your password?
          </a>
          <div className="d-grid gap-2 mt-4 mb-2">
            <ButtonBootstrap
            disabled={disabled}
              primaryWide={true}
              text="Log In"
              onClick={() => {
                handleSignIn(username, password);
              }}
              type="submit"
            ></ButtonBootstrap>
          </div>
          <div className="text-center mt-4">
            <p>
              Don't have a Bubble account?{" "}
              <a
                href="#"
                onClick={() => {
                  props.handleCloseLogin();
                  handleShowSignUp();
                }}
                className={styles.formLink}
              >
                Sign up
              </a>
            </p>
          </div>
        </Modal.Body>
      </Modal>
      <SignUpModal
        showSignUp={showSignUp}
        handleShowSignUp={handleShowSignUp}
        handleCloseSignUp={handleCloseSignUp}
      />
    </>
  );
};
