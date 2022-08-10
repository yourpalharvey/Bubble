import styles from "./logInModal.module.css";
import Modal from "react-bootstrap/Modal";

import React, { useState } from "react";

import { ButtonCustom } from "../../objects/buttonCustom";
import { Shadow } from "../../objects/shadow";
import { InputForms } from "../../objects/inputForms";
import { handleSignup } from "../../logic/auth";

export const LogInModal = (props) => {
  const [username, getUsername] = useState("");
  const [password, getPassword] = useState("");

  const [passwordShown, setPasswordShown] = useState(false);
  // Password toggle handler, shows password as text.
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <InputForms
            passwordShown={passwordShown}
            togglePassword={togglePassword}
            logInForm={true}
          />
          <a href="/404" className={styles.formLink}>
            Forgotten password?
          </a>
        </Modal.Body>

        <Modal.Footer className={styles.modalFooter}>
          <Shadow>
            <ButtonCustom
              text="Log in"
              colourWide={true}
              onClick={(props.handleClose, handleSignup(username, password))}
              type="submit"
            />
          </Shadow>
        </Modal.Footer>

        {/* second footer for link to sign up */}
        <Modal.Footer className={styles.modalFooter}>
          {/* TODO anchor tag opens another modal for sign up? */}
          <p>
            Don't have a Bubble account?{" "}
            <a href="/signup" className={styles.formLink}>
              Sign up
            </a>
          </p>
        </Modal.Footer>
      </Modal>
    </>
  );
};
