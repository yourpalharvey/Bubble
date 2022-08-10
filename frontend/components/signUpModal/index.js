import styles from "./signUpModal.module.css";
import Modal from "react-bootstrap/Modal";

import React, { useState } from "react";

import { Button } from "../../objects/button";
import { Shadow } from "../../objects/shadow";
import { InputForms } from "../../objects/inputForms";
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
      <Modal show={props.show}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <InputForms
            passwordShown={passwordShown}
            togglePassword={togglePassword}
            signUpForm={true}
          />
        </Modal.Body>

        <Modal.Footer className={styles.modalFooter}>
          <Button
            text="Sign up"
            colourWide={true}
            onClick={handleSignup(username, password, dateOfBirth, email)}
            type="submit"
          />
        </Modal.Footer>

        {/* second footer for link to sign up */}
        <Modal.Footer className={styles.modalFooter}>
          {/* TODO anchor tag opens another modal for sign up? */}
          <p>Privacy Stuff!</p>
        </Modal.Footer>
      </Modal>
    </>
  );
};
