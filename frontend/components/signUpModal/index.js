import styles from "./signUpModal.module.css";
import Modal from "react-bootstrap/Modal";

import React, { useState } from "react";

import { InputForms } from "../../objects/inputForms";
import { ButtonBootstrap } from "../../objects/buttonBootstrap";
import { handleSignup } from "../../logic/auth";

export const SignUpModal = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");

  const [passwordShown, setPasswordShown] = useState(false);
  // Password toggle handler, shows password as text.
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <Modal show={props.showSignUp} onHide={props.handleCloseSignUp}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputForms
            passwordShown={passwordShown}
            togglePassword={togglePassword}
            setUsername={setUsername}
            setPassword={setPassword}
            setDateOfBirth={setDateOfBirth}
            setEmail={setEmail}
            signUpForm={true}
          />
          <div className={styles.agreeStatementContainer}>
            <p>
              By clicking Sign Up, you are agreeing to Bubble’s{" "}
              <a href="/404" className={styles.formLink}>
                Terms of service
              </a>{" "}
              and are acknowledging our{" "}
              <a href="/404" className={styles.formLink}>
                Privacy Notice.
              </a>
            </p>
          </div>

          <div className="d-grid gap-2 mt-4 mb-2">
            <ButtonBootstrap
              primaryWide={true}
              text="Sign Up"
              onClick={() => {
                handleSignup(username, password, dateOfBirth, email),
                  props.handleCloseSignUp();
              }}
              type="submit"
            ></ButtonBootstrap>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
