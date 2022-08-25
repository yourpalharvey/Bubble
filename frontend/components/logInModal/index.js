import styles from "./logInModal.module.css";
import Modal from "react-bootstrap/Modal";

import React, { useState } from "react";
import { setCookie } from 'cookies-next';

import { InputForms } from "../../objects/inputForms";
import { ButtonBootstrap } from "../../objects/buttonBootstrap";
import { handleLogin } from "../../logic/auth/index";
import { SignUpModal } from "../signUpModal";

export const LogInModal = (props) => {
  const [showSignUp, setShowSignUp] = useState(false);
  const handleShowSignUp = () => setShowSignUp(true);
  const handleCloseSignUp = () => setShowSignUp(false);

  // handling form functions
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [passwordShown, setPasswordShown] = useState(false);
  // Password toggle handler, shows password as text.
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  // handle signIn
  const handleSignIn = async () => {
    // handle logIn function
    const res = await handleLogin(username, password);

    // set expiry
    const expDate = new Date();
    expDate.setMonth(expDate.getMonth() + 1);

    const OPTIONS = {
      expires: expDate
    }

    // save res
    setCookie("token", res, OPTIONS);

    // refresh


  }

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
            logInForm={true}
          />
          <a href="/404" className={styles.formLink}>
            Forgotten your password?
          </a>
          <div className="d-grid gap-2 mt-4 mb-2">
            <ButtonBootstrap
              primaryWide={true}
              text="Log In"
              onClick={() => {
                handleSignIn(username, password);
                props.handleCloseLogin();
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
