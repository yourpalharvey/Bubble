import styles from "./signUpModal.module.css";
import Modal from "react-bootstrap/Modal";

import React, { useEffect, useState } from "react";

import { InputForms } from "../../objects/inputForms";
import { ButtonBootstrap } from "../../objects/buttonBootstrap";
import { handleSignup, checkAge, checkUsername, checkPasswordValidBool, checkEmailValidBool } from "../../logic/auth";

// set minimum age
const age = 18;

export const SignUpModal = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [old, setOld] = useState(false);
  const [original, setOriginal] = useState(false);
  const [disabled, setDisabled] =  useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  const [passwordShown, setPasswordShown] = useState(false);
  // Password toggle handler, shows password as text.
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  // check if age added is above threshold
  useEffect(
    () => {
      setOld(checkAge(dateOfBirth, 18));
    },
    [dateOfBirth]
  )

  // check username is original
  useEffect(
    () => {
      setOriginal(checkUsername(username));
    },
    [username]
  )

  // check username is valid
  useEffect(
    () => {
      setValidPassword(checkPasswordValidBool(password));
    },
    [password]
  )

  // check password
  useEffect(
    () => {
      setValidEmail(checkEmailValidBool(email));
    },
    [email]
  )

  // toggle disabled
  useEffect(
    () => {
      if (original && old && validPassword, validEmail)
      {
        setDisabled(false);
      }
      else
      {
        setDisabled(true);
      };
    },
    [old, original, validPassword, validEmail]
  )

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
              disabled={disabled}
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

